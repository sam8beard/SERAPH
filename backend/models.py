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
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'), primary_key=True)
    startdate = db.Column(db.Date, primary_key=True)
    enddate = db.Column(db.Date)

    def to_json(self):
        return {
            "projectID": self.projectid,
            "startDate": self.startdate,
            "endDate": self.enddate,
        }

class Milestones(db.Model):
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'), primary_key=True)
    date = db.Column(db.Date, primary_key = True)
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
    sprintname = db.Column(db.String(20))
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'))
    startdate = db.Column(db.Date)
    enddate = db.Column(db.Date)
    commitedload = db.Column(db.Integer)
    uncommitedload = db.Column(db.Integer)
    completed = db.Column(db.Integer)
    notes = db.Column(db.Text)
    archived = db.Column(db.Integer)

    def to_json(self):
        return {
            "sprintID": self.sprintid,
            "sprintName": self.sprintname,
            "projectID": self.projectid,
            "startDate": self.startdate,
            "endDate": self.enddate,
            "commitedLoad": self.commitedload,
            "uncommitedLoad": self.uncommitedload,
            "completed": self.completed,
            "notes": self.notes,
            "archived": self.archived,
        }
