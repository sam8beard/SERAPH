from flask import request, jsonify 
from config_db import db, app
from models import Project


@app.route("/get_projects", methods=["GET"])
def get_projects(): 
    projects = Project.query.all() 
    json_projects = list(map(lambda x: x.to_json(), projects))
    return jsonify({"projects": json_projects})

@app.route("/add_project",methods=["POST"])
def add_project(): 
    customername = request.json.get("customerName")
    techused = request.json.get("techUsed") 
    projectid = request.json.get("projectID")
    projectname = request.json.get("projectName") 
    elementchiefid = request.json.get("elementChiefID")
    flightdirectorid = request.json.get("flightDirectorID")
    archived = request.json.get("archived") 

    if not customername or not techused or not projectid or not projectname or not elementchiefid or not flightdirectorid or not archived: 
        return (
            jsonify({"message": "You must fill in all fields to create a project"}), 400
        )
    
    new_project = Project(customername = customername, techused = techused, projectid = projectid, 
                          projectname = projectname, elementchiefid = elementchiefid, 
                          flightdirectorid = flightdirectorid, archived = archived)
    
    try:
        db.session.add(new_project)
        db.session.commit() 
    except Exception as e: 
        return jsonify()
    
if __name__ == "__main__": 
    with app.app_context(): 
        db.create_all()

    app.run(debug=True)
