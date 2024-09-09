from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String())
    email = db.Column(db.String())
    password = db.Column(db.String())
    role = db.Column(db.String())

class Tours(db.Model):
    __tablename__ = 'tours'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    description = db.Column(db.String())
    price = db.Column(db.Integer())
    image = db.Column(db.String())

    images = db.relationship("Images", backref="tours")

class Images(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    tour_id = db.Column(db.Integer, db.ForeignKey("tours.id"))
    image1 = db.Column(db.String())
    image2 = db.Column(db.String())
    image3 = db.Column(db.String())

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    tour_id = db.Column(db.Integer, db.ForeignKey("tours.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    name = db.Column(db.String)
    email = db.Column(db.String)
    phone_no = db.Column(db.Integer)
    price = db.Column(db.Integer)
    date = db.Column(db.Date)

    tours = db.relationship("Tours", backref="bookings")
    users = db.relationship("User", backref="bookings")
