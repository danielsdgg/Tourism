from routes.tours import tours
from app import app

app.register_blueprint(tours)

if __name__ == '__main__':
    app.run(debug=True)