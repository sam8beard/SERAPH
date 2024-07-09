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

    def to_json(self):
        return {
            "customerName": self.customername,
            "techUsed": self.techused,
            "projectID": self.projectid,
            "projectName": self.projectname,
            "elementChiefID": self.elementchiefid,
            "flightDirectorID": self.flightdirectorid,
            "archived": self.archived,
            "projectURL": self.projecturl,
        }

class Employee(db.Model):
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
    projecttitle = db.Column(db.Text)
    projectstatus = db.Column(db.Text)
    dayplan = db.Column(db.Text)
    information = db.Column(db.Text)

    def to_json(self):
        return {
            "projectID": self.projectid,
            "startDate": self.startdate,
            "endDate": self.enddate,
            "projecTitle": self.projectitle,
            "projectStatus": self.projectstatus,
            "dayPlan": self.dayplan,
            "information": self.information,
        }

class Milestone(db.Model):
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'), primary_key=True)
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
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectID'), primary_key=True)
    startdate = db.Column(db.Date, primary_key=True)
    enddate = db.Column(db.Date)
    committedload = db.Column(db.Integer)
    uncommittedload = db.Column(db.Integer)
    completed = db.Column(db.Integer)
    notes = db.Column(db.Text)
    archived = db.Column(db.Integer)
    velocity = db.Column(db.Integer)
    capacity = db.Column(db.Integer)

    def to_json(self):
        return {
            "projectID": self.projectid,
            "startDate": self.startdate,
            "endDate": self.enddate,
            "committedLoad": self.committedload,
            "uncommittedLoad": self.uncommittedload,
            "completed": self.completed,
            "notes": self.notes,
            "archived": self.archived,
            "velocity": self.velocity,
            "capacity": self.capacity,
        }

class Assignment(db.Model):
    jnumber = db.Column(db.String(12), db.ForeignKey('employee.jnumber'), primary_key=True)
    projectid = db.Column(db.String(100), db.ForeignKey('project.projectid'), primary_key=True)
    
    def to_json(self):
        return {
            "jNumber" : self.jnumber,
            "projectID" : self.projectid,
        }
