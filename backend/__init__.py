from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    # Use environment variables for secret key and database URI
    app.config['SECRET_KEY'] = 'your_default_secret_key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://guest:Guest123@172.20.0.118:5433/postgres'

    db.init_app(app)

    # Register blueprints
    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    # Import and create database tables
    from .models import Customer, Employee, WAR, Milestone, Sprint, Project

    with app.app_context():
        db.create_all()  # This will create tables if they don't exist

    return app
