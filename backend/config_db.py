from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://guest:Guest123@172.20.0.118:5433/postgres"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False 

db = SQLAlchemy(app) 

# import os 
# import psycopg2

# db = psycopg2.connect(
#         host="172.20.0.118",
#         port="5433",
#         database="postgres",
#         user='guest',
#         password='Guest123'
# )

# cur = db.cursor() 

# cur.execute('INSERT INTO public.project (CustomerName, TechUsed, ProjectID, ProjectName, ElementChiefID, FlightDirectorID)'
#             'VALUES (%s, %s, %s, %s, %s, %s)',
#             ('SERAPH', 'Python, SQL', 'PRJ009', 'Surveilance', 'ECH123', 'FD456'))

# db.commit()
# THANK THE FUCKING LORD !!!!!!!!
# cur.execute("SELECT * FROM public.project WHERE ProjectID = %s", ('PRJ002',))

# Fetch the result
# result = cur.fetchall()

# print(result)