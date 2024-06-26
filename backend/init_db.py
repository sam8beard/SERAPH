import os 
import psycopg2

conn = psycopg2.connect(
        host="172.20.0.118",
        port="5433",
        database="postgres",
        user='guest',
        password='Guest123'
)

cur = conn.cursor() 

cur.execute('INSERT INTO public.project (CustomerName, TechUsed, ProjectID, ProjectName, ElementChiefID, FlightDirectorID)'
            'VALUES (%s, %s, %s, %s, %s, %s)',
            ('MedusaPT2', 'Python, SQL', 'PRJ004', 'Surveilance', 'ECH123', 'FD456'))

# print(cur.execute('SELECT * FROM project' 'where ProjectID=PRJ001'))

cur.execute('INSERT INTO public.project (CustomerName, TechUsed, ProjectID, ProjectName, ElementChiefID, FlightDirectorID)'
            'VALUES (%s, %s, %s, %s, %s, %s)',
            ('SOAB', 'Python, SQL', 'PRJ003', 'Surveilance', 'ECH123', 'FD456'))
conn.commit()
# THANK THE FUCKING LORD !!!!!!!!
# cur.execute("SELECT * FROM public.project WHERE ProjectID = %s", ('PRJ002',))

# Fetch the result
# result = cur.fetchall()

# print(result)