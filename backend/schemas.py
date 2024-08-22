from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Integer()
    username = fields.String()
    email = fields.String()
    password = fields.String()
    role = fields.String()

class ToursSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    description = fields.String()
    price = fields.Integer()
    image = fields.String()

class ImagesSchema(Schema):
    id = fields.Integer()
    tour_id = fields.Integer()
    image1 = fields.String()
    image2 = fields.String()
    image3 = fields.String()