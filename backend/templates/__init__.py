from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_default_secret_key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://guest:Guest123@172.20.0.118:5433/postgres'
    db.init_app(app)

    from .views import views
    from .auth import auth
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    from .models import Project, Employees, War, Milestones, Sprint

    with app.app_context():
        db.create_all()

    return app
