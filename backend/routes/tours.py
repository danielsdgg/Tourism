from flask import jsonify, request, make_response, Blueprint
from models import Tours, db
from schemas import ToursSchema

tours = Blueprint('tours', __name__)

@tours.route('/')
def home():
    return jsonify({'message': 'Welcome to tours'})

@tours.route('/tours', methods=['GET'])
def get_all_tours():
    tour_list = Tours.query.all()
    tour_data = ToursSchema(many = True).dump(tour_list)
    return make_response(jsonify(tour_data), 200)

@tours.route('/tour/<int:id>', methods=['GET'])
def tour_item(id):
    tours = Tours.query.filter_by(id=id).first()
    if not tours:
        return make_response(jsonify({'meesage': 'tour not found'}), 404)
    serialized_tours = ToursSchema().dump(tours)
    return make_response(jsonify(serialized_tours), 200)

@tours.route('/tours', methods=['POST'])
def create_tour():
    data = request.get_json()
    tours = ToursSchema().load(data)
    new_tour = Tours(**tours)

    db.session.add(new_tour)
    db.session.commit()
    tour_data = ToursSchema().dump(new_tour)
    return make_response(jsonify(tour_data), 201)

@tours.route('/tours/<int:id>', methods=['DELETE'])
def delete_tour(id):
    tours = Tours.query.filter_by(id=id).first()
    if not tours:
        return jsonify(message='tour not found'), 404
    
    db.session.delete(tours)
    db.session.commit()

    return make_response(jsonify(message='Tour deleted successfully'),200)