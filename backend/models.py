<<<<<<< HEAD
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


    

=======
from config_db import db
# from flask_login import UserMixin


class Project(db.Model):
    customername = db.Column(db.String(100))
    techused = db.Column(db.Text)
    projectid = db.Column(db.String(100), primary_key=True)
    projectname = db.Column(db.String(100))
    elementchiefid = db.Column(db.String(100))
    flightdirectorid = db.Column(db.String(100))
    archived = db.Column(db.Integer)
    projecturl = db.Column(db.String(1000))

    # DO THIS FOR EVERY MODEL
    def to_json(self):
        return {
            "customerName": self.customername,
            "techUsed": self.techused,
            "projectID": self.projectid,
            "projectName": self.projectname,
            "elementChiefID": self.elementchiefid,
            "flightDirectorID": self.flightdirectorid,
            "archived": self.archived,
            "projecturl": self.projecturl,
        }


class Employees(db.Model):
    jnumber = db.Column(db.String(12), primary_key=True)
    firstname = db.Column(db.String(100))
    lastname = db.Column(db.String(100))
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'))
    roleenum = db.Column(db.Integer)
    supervisorid = db.Column(db.String(12))

    def to_json(self):
        return {
            "jNumber": self.jnumber,
            "firstName": self.firstname,
            "lastName": self.lastname,
            "projectID": self.projectid,
            "roleEnum": self.roleenum,
            "supervisorID": self.supervisorid,
        }


class War(db.Model):
    projectid = db.Column(db.String(100), db.ForeignKey(
        'project.projectid'), primary_key=True)
    startdate = db.Column(db.Date, primary_key=True)
    enddate = db.Column(db.Date)

    def to_json(self):
        return {
            "projectID": self.projectid,
            "startDate": self.startdate,
            "endDate": self.enddate,
        }


class Milestones(db.Model):
    projectid = db.Column(db.String(100), db.ForeignKey(
        'project.projectid'), primary_key=True)
    date = db.Column(db.Date, primary_key=True)
    description = db.Column(db.String(1000))
    status = db.Column(db.String(1000))

    def to_json(self):
        return {
            "projectID": self.projectid,
            "date": self.date,
            "description": self.description,
            "status": self.status,
        }


class Sprint(db.Model):
    sprintid = db.Column(db.String(20), primary_key=True)
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectID'))
    startdate = db.Column(db.Date)
    enddate = db.Column(db.Date)
    committedload = db.Column(db.Integer)
    uncommittedload = db.Column(db.Integer)
    completed = db.Column(db.Integer)
    notes = db.Column(db.Text)
    archived = db.Column(db.Integer)

    def to_json(self):
        return {
            "sprintid": self.sprintid,
            "projectid": self.projectid,
            "startdate": self.startdate,
            "enddate": self.enddate,
            "committedload": self.committedload,
            "uncommittedload": self.uncommittedload,
            "completed": self.completed,
            "notes": self.notes,
            "archived": self.archived,
        }


class assignments(db.Model):
    jnumber = db.Column(db.String(20), db.ForeignKey(
        'employees.jnumber'), primary_key=True)
    projectid = db.Column(db.String(100), db.ForeignKey(
        'project.projectid'), primary_key=True)

    def to_json(self):
        return {
            "jnumber": self.jnumber,
            "projectid": self.projectid,
        }
>>>>>>> c41a59ce48c7cdbe6b8b2f6f20021dc4621ef7cb
