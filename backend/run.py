from routes.tours import tours
from routes.bookings import booking
from routes.images import images
from app import app

app.register_blueprint(tours)
app.register_blueprint(booking)
app.register_blueprint(images)

if __name__ == '__main__':
    app.run(debug=True)