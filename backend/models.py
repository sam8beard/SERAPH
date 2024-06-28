from ... import db
# This imports the db object from the current package, which is an instance of SQLAlchemy, used to interact with the database.
from flask_login import UserMixin
# This imports UserMixin from Flask-Login, which provides default implementations for user session management.

class customer(db.Model, UserMixin):
    CustomerName = db.Column(db.String(100))
    TechUsed = db.Column(db.String(100)) #Might need to switch to text data type later
    ProjectID = db.Column(db.Integer, primary_key=True)
    ProjectName = db.Column(db.String(100))
    ElementChiefID = db.Column(db.String(100))
    FlightDirectorID = db.Column(db.String(100))

class employees(db.Model, UserMixin):
    JNumber = db.Column(db.String(12), primary_key=True)
    FirstName = db.Column(db.String(100))
    LastName = db.Column(db.String(100))
    ProjectID = db.Column(db.String(100),db.ForeignKey('project.ProjectID'))
    RoleENUM = db.Column(db.Integer)
    SupervisorID = db.Column(db.String(12))

class war(db.Model, UserMixin):
    ProjectID = db.Column(db.String(20), db.ForeignKey('project.ProjectID'), primary_key=True)
    StartDate = db.Column(db.Date)
    EndDate = db.Column()

class milestones(db.Model, UserMixin):
    ProjectID = db.Column(db.String(1000), db.ForeignKey('project.ProjectID'), primary_key=True )
    Date = db.Column(db.Date)
    Description = db.Column(db.String(1000))
    Status = db.Column(db.String(1000))

class sprint(db.Model, UserMixin):
    SprintID = db.Column(db.String(20), primary_key=True)
    ProjectID = db.Column(db.String(20), db.ForeignKey('project.ProjectID'))
    StartDate = db.Column(db.Date)
    EndDate = db.Column(db.Date)
    CommitedLoad = db.Column(db.Integer)
    UncommitedLoad = db.Column(db.Integer)
    Completed = db.Column(db.Integer)
    Notes = db.Column(db.Text)


    

