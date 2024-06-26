from . import db
from flask_login import UserMixin

class Project(db.Model, UserMixin):
    customername = db.Column(db.String(100))
    techused = db.Column(db.Text)
    projectid = db.Column(db.String(100), primary_key=True)
    projectname = db.Column(db.String(100))
    elementchiefid = db.Column(db.String(100))
    flightdirectorid = db.Column(db.String(100))
    archived = db.Column(db.Integer)

class Employees(db.Model, UserMixin):
    jnumber = db.Column(db.String(12), primary_key=True)
    firstname = db.Column(db.String(100))
    lastname = db.Column(db.String(100))
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'))
    roleenum = db.Column(db.Integer)
    supervisorid = db.Column(db.String(12))

class War(db.Model, UserMixin):
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'), primary_key=True)
    startdate = db.Column(db.Date)
    enddate = db.Column(db.Date)

class Milestones(db.Model, UserMixin):
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'), primary_key=True)
    date = db.Column(db.Date)
    description = db.Column(db.String(1000))
    status = db.Column(db.String(1000))

class Sprint(db.Model, UserMixin):
    sprintid = db.Column(db.String(20), primary_key=True)
    sprintname = db.Column(db.String(20))
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'))
    startdate = db.Column(db.Date)
    enddate = db.Column(db.Date)
    commitedload = db.Column(db.Integer)
    uncommitedload = db.Column(db.Integer)
    completed = db.Column(db.Integer)
    notes = db.Column(db.Text)
    archived = db.Column(db.Integer)
