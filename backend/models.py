from config import db

class Employee(db.Model): 
    id = db.Column(db.Integer, primary_key=True) 
