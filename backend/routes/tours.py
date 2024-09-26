from flask import jsonify, request, make_response, Blueprint
from models import Tours, db, Images
from schemas import ToursSchema
from flask_cors import CORS


tours = Blueprint('tours', __name__)
CORS(tours)


@tours.route('/tours', methods=['POST'])
def add_tour():
    return 'Tour added'

@tours.route('/')
def home():
    return jsonify({'message': 'Welcome to tours'})

# Get all tours
@tours.route('/tours', methods=['GET'])
def get_all_tours():
    tour_list = Tours.query.all()
    tour_data = ToursSchema(many = True).dump(tour_list)
    return make_response(jsonify(tour_data), 200)

# getting one tour
@tours.route('/tour/<int:id>', methods=['GET'])
def tour_item(id):
    tours = Tours.query.filter_by(id=id).first()
    if not tours:
        return make_response(jsonify({'message': 'Tour not found'}), 404)
    serialized_tours = ToursSchema().dump(tours)
    return make_response(jsonify(serialized_tours), 200)

# Posting a new tour with its multiple images
@tours.route('/post_tours', methods=['POST'])
def create_tour():
    data = request.get_json()
    images_data = data.pop('images', [])  # Extract images data
    tours = ToursSchema().load(data)  # Load the main tour data
    
    new_tour = Tours(**tours)
    db.session.add(new_tour)
    db.session.flush()  # Flush to get the new tour ID

    # Add images if they are part of the payload
    for image_data in images_data:
        new_image = Images(tour_id=new_tour.id, **image_data)
        db.session.add(new_image)

    db.session.commit()
    tour_data = ToursSchema().dump(new_tour)
    return make_response(jsonify(tour_data), 201)



# PUT Route - Full Update
@tours.route('/update_tour/<int:id>', methods=['PUT'])
def update_tour(id):
    data = request.get_json()
    tour = Tours.query.get_or_404(id)

    # Update tour fields
    tour.name = data.get('name', tour.name)
    tour.description = data.get('description', tour.description)
    tour.price = data.get('price', tour.price)
    tour.image = data.get('image', tour.image)

    # Update images if provided
    images_data = data.get('images', [])
    if images_data:
        # Delete existing images
        Images.query.filter_by(tour_id=tour.id).delete()

        # Add new images
        for image_data in images_data:
            new_image = Images(**image_data)
            tour.images.append(new_image)

    db.session.commit()
    updated_tour = {
        "id": tour.id,
        "name": tour.name,
        "description": tour.description,
        "price": tour.price,
        "image": tour.image,
        "images": [{"image1": img.image1, "image2": img.image2, "image3": img.image3} for img in tour.images]
    }

    return make_response(jsonify(updated_tour), 200)

# PATCH Route - Partial Update
@tours.route('/update_tour/<int:id>', methods=['PATCH'])
def patch_tour(id):
    data = request.get_json()
    tour = Tours.query.get_or_404(id)

    # Update tour fields if provided
    if 'name' in data:
        tour.name = data['name']
    if 'description' in data:
        tour.description = data['description']
    if 'price' in data:
        tour.price = data['price']
    if 'image' in data:
        tour.image = data['image']

    # Update images if provided
    images_data = data.get('images', [])
    if images_data:
        # Update existing images or add new ones
        Images.query.filter_by(tour_id=tour.id).delete()
        for image_data in images_data:
            new_image = Images(**image_data)
            tour.images.append(new_image)

    db.session.commit()
    updated_tour = {
        "id": tour.id,
        "name": tour.name,
        "description": tour.description,
        "price": tour.price,
        "image": tour.image,
        "images": [{"image1": img.image1, "image2": img.image2, "image3": img.image3} for img in tour.images]
    }

    return make_response(jsonify(updated_tour), 200)

# DELETE Route - Delete Tour
@tours.route('/delete_tour/<int:id>', methods=['DELETE'])
def delete_tour(id):
    tour = Tours.query.get_or_404(id)

    # Delete associated images first
    Images.query.filter_by(tour_id=tour.id).delete()

    # Delete the tour
    db.session.delete(tour)
    db.session.commit()

    return make_response(jsonify({"message": "Tour deleted successfully"}), 200)