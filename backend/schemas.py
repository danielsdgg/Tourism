from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Integer()
    username = fields.String()
    email = fields.String()
    password = fields.String()
    role = fields.String()

class ImagesSchema(Schema):
    id = fields.Integer()
    tour_id = fields.Integer()
    image1 = fields.String()
    image2 = fields.String()
    image3 = fields.String()

class ToursSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    description = fields.String()
    image = fields.String()
    adult_price = fields.Integer(required=True)
    child_price = fields.Integer(required=True)

    images = fields.Nested(ImagesSchema,many=True)


class BookingsSchema(Schema):
    id = fields.Integer()
    tour_id = fields.Integer()
    user_id = fields.Integer()
    name = fields.String()
    email = fields.String()
    phone_no = fields.Integer()
    price = fields.Integer()
    date = fields.Date()

 

