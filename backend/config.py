from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

app = Flask(__name__) 
CORS(app) # allows us to send cross origin requests to our app 
 
app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://postgres:110402@localhost:5432/postgres'

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False 

# links db to application
db = SQLAlchemy(app) 
