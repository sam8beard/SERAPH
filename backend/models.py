from . import db
from flask_login import UserMixin

class Project(db.Model, UserMixin):
    CustomerName = db.Column(db.String(100))
    TechUsed = db.Column(db.Text)
    ProjectID = db.Column(db.String(100), primary_key=True)
    ProjectName = db.Column(db.String(100))
    ElementChiefID = db.Column(db.String(100))
    FlightDirectorID = db.Column(db.String(100))
    Archive = db.Column(db.Integer)

class Employees(db.Model, UserMixin):
    JNumber = db.Column(db.String(12), primary_key=True)
    FirstName = db.Column(db.String(100))
    LastName = db.Column(db.String(100))
    ProjectID = db.Column(db.String(100), db.ForeignKey('project.ProjectID'))
    RoleENUM = db.Column(db.Integer)
    SupervisorID = db.Column(db.String(12))

class War(db.Model, UserMixin):
    ProjectID = db.Column(db.String(100), db.ForeignKey('project.ProjectID'), primary_key=True)
    StartDate = db.Column(db.Date)
    EndDate = db.Column(db.Date)

class Milestones(db.Model, UserMixin):
    ProjectID = db.Column(db.String(100), db.ForeignKey('project.ProjectID'), primary_key=True)
    Date = db.Column(db.Date)
    Description = db.Column(db.String(1000))
    Status = db.Column(db.String(1000))

class Sprint(db.Model, UserMixin):
    SprintID = db.Column(db.String(20), primary_key=True)
    SprintName = db.Column(db.String(20))
    ProjectID = db.Column(db.String(100), db.ForeignKey('project.ProjectID'))
    StartDate = db.Column(db.Date)
    EndDate = db.Column(db.Date)
    CommitedLoad = db.Column(db.Integer)
    UncommitedLoad = db.Column(db.Integer)
    Completed = db.Column(db.Integer)
    Notes = db.Column(db.Text)
    Archive = db.Column(db.Integer)
