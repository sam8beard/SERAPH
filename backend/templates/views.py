from flask import Blueprint
from . import db
from models import Project

views = Blueprint('views', __name__)

@views.route('/add_project')

def add_project():
    new_project = Project(
        customername="Test Customer",
        techused="Python, Flask",
        projectid="P001",
        projectname="Test Project",
        elementchiefid="E001",
        flightdirectorid="F001",
        archived=0
    )
    db.session.add(new_project)
    db.session.commit()
    return "New project added!"

@views.route('/archived')

def archived():
    archived = (
        db.session.query(Project.archived == 1)
            
    )    