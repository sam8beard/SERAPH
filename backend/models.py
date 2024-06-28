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
        }


class Employees(db.Model):
    jnumber = db.Column(db.String(12), primary_key=True)
    firstname = db.Column(db.String(100))
    lastname = db.Column(db.String(100))
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'))
    roleenum = db.Column(db.Integer)
    supervisorid = db.Column(db.String(12))

class War(db.Model):
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'), primary_key=True)
    startdate = db.Column(db.Date, primary_key=True)
    enddate = db.Column(db.Date)

class Milestones(db.Model):
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'), primary_key=True)
    date = db.Column(db.Date, primary_key = True)
    description = db.Column(db.String(1000))
    status = db.Column(db.String(1000))

class Sprint(db.Model):
    sprintID = db.Column(db.String(20), primary_key=True)
    sprintName = db.Column(db.String(20))
    projectID = db.Column(db.String(100), db.ForeignKey('project.projectID'))
    startDate = db.Column(db.Date)
    endDate = db.Column(db.Date)
    committedLoad = db.Column(db.Integer)
    uncommittedLoad = db.Column(db.Integer)
    completed = db.Column(db.Integer)
    notes = db.Column(db.Text)
    archived = db.Column(db.Integer)
