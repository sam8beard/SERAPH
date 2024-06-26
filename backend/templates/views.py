from flask import Blueprint
from . import db
from .models import Project

views = Blueprint('views', __name__)

@views.route('/add_project')
def add_project():
    new_project = Project(
        CustomerName="Test Customer",
        TechUsed="Python, Flask",
        ProjectID="P001",
        ProjectName="Test Project",
        ElementChiefID="E001",
        FlightDirectorID="F001",
        Archived=0
    )
    db.session.add(new_project)
    db.session.commit()
    return "New project added!"
