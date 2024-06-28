from flask import request, jsonify 
from config_db import db, app
from models import Project, Employees, War, Milestones, Sprint

# Project functions

@app.route("/get_projects", methods=["GET"])
def get_projects(): 
    projects = Project.query.all() 
    json_projects = list(map(lambda x: x.to_json(), projects))
    return jsonify({"projects": json_projects})

@app.route("/add_project", methods=["POST"])
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

@app.route("/get_project/<int:project_id>", methods=["GET"])
def get_project(project_id):
    project = Project.query.get(project_id)
    return jsonify({"project": project.to_json()})

@app.route("/delete_project/<int:project_id>", methods=["DELETE"])
def delete_project(project_id):
    project = Project.query.get(project_id)
    if project is None:
        return jsonify({"message": "Invalid project id"}), 400
    
    db.session.delete(project)
    db.session.commit()
    return jsonify({"message": "Project deleted successfully"}), 200

# War functions
# How does this access other database tables?

#Returns everything from the wars tables
@app.route("/get_wars", methods=["GET"])
def get_wars():
    if request.method =='GET':
        returnWars = War.query.all()
        json_wars = list(map(lambda x: x.to_json(), returnWars))
        return jsonify({"returnWars": json_wars})

#To add a specific war to the table
@app.route("/add_war", methods=["POST"])
def add_war():
    if request.method =='POST':
        projectid = request.json.get("projectID")
        startdate = request.json.get("startDate")
        enddate = request.json.get("endDate")

        if not projectid or not startdate or not enddate: 
            return (
                jsonify({"message": "You must fill in all fields to create a war"}), 400
            )
    
        new_war = War(projectid = projectid, startdate = startdate, enddate = enddate)
        
        try:
            db.session.add(new_war)
            db.session.commit() 
        except Exception as e: 
            return jsonify()

@app.route("/get_war/<int:war_id>", methods=["GET"])
def get_war(war_id):
    war = War.query.get(war_id)
    return jsonify({"war": war.to_json()})

@app.route("/delete_war/<int:war_id>", methods=["DELETE"])
def delete_war(war_id):
    war = War.query.get(war_id)
    if war is None:
        return jsonify({"message": "Invalid war id"}), 400
    
    db.session.delete(war)
    db.session.commit()
    return jsonify({"message": "War deleted successfully"}), 200

# Milestone functions
# How does this access other database tables?
# Need a way to get a specific milestone since there is no milestone_id

@app.route("/get_milestones", methods=["GET"])
def get_milestones():
    milestones = Milestones.query.all()
    json_milestones = list(map(lambda x: x.to_json(), milestones))
    return jsonify({"milestones": json_milestones})

@app.route("/add_milestone", methods=["POST"])
def add_milestone():
    date = request.json.get("date")
    description = request.json.get("description")
    status = request.json.get("status")
    projectid = request.json.get("projectID")

    if not date or not description or not status or not projectid:
        return jsonify({"message": "You must fill in all fields to create a milestone"}), 400
    
    new_milestone = Milestones(date = date, description = description, status = status, projectid = projectid)

    try:
        db.session.add(new_milestone)
        db.session.commit()
    except Exception as e:
        return jsonify()

@app.route("/get_milestone/<int:milestone_id>", methods=["GET"])
def get_milestone(milestone_id):
    milestone = Milestones.query.get(milestone_id)
    return jsonify({"milestone": milestone.to_json()})

@app.route("/delete_milestone/<int:milestone_id>", methods=["DELETE"])
def delete_milestone(milestone_id):
    milestone = Milestones.query.get(milestone_id)
    if milestone is None:
        return jsonify({"message": "Invalid milestone id"}), 400
    
    db.session.delete(milestone)
    db.session.commit()
    return jsonify({"message": "Milestone deleted successfully"}), 200

# Sprint functions
# How does this access other database tables?

@app.route("/get_sprints", methods=["GET"])
def get_sprints():
    sprints = Sprint.query.all()
    json_sprints = list(map(lambda x: x.to_json(), sprints))
    return jsonify({"sprints": json_sprints})

@app.route("/add_sprint", methods=["POST"])
def add_sprint():
    sprintid = request.json.get("sprintID")
    sprintname = request.json.get("sprintName")
    projectid = request.json.get("projectID")
    startdate = request.json.get("startDate")
    enddate = request.json.get("endDate")
    commitedload = request.json.get("commitedLoad")
    uncommitedload = request.json.get("uncommitedLoad")
    completed = request.json.get("completed")
    notes = request.json.get("notes")
    archived = request.json.get("archived")

    if not sprintid or not sprintname or not projectid or not startdate or not enddate or not commitedload or not uncommitedload or not completed or not notes or not archived:
        return jsonify({"message": "You must fill in all fields to create a sprint"}), 400
    
    new_sprint = Sprint(sprintid = sprintid, sprintname = sprintname, projectid = projectid,
                        startdate = startdate, enddate = enddate, commitedload = commitedload, uncommitedload = uncommitedload,
                        completed = completed, notes = notes, archived = archived)
    
    try:
        db.session.add(new_sprint)
        db.session.commit()
    except Exception as e:
        return jsonify()

@app.route("/get_sprint/<int:sprint_id>", methods=["GET"])
def get_sprint(sprint_id):
    sprint = Sprint.query.get(sprint_id)
    return jsonify({"sprint": sprint.to_json()})

@app.route("/delete_sprint/<int:sprint_id>", methods=["DELETE"])
def delete_sprint(sprint_id):
    sprint = Sprint.query.get(sprint_id)
    if sprint is None:
        return jsonify({"message": "Invalid sprint id"}), 400
    
    db.session.delete(sprint)
    db.session.commit()
    return jsonify({"message": "Sprint deleted successfully"}), 200

# Employee functions
# How does this access other database tables?

@app.route("/get_employees", methods=["GET"])
def get_employees():
    employees = Employees.query.all()
    json_employees = list(map(lambda x: x.to_json(), employees))
    return jsonify({"employees": json_employees})

@app.route("/add_employee", methods=["POST"])
def add_employee():
    jnumber = request.json.get("jNumber")
    firstname = request.json.get("firstName")
    lastname = request.json.get("lastName")
    projectid = request.json.get("projectID")
    role = request.json.get("role")
    supervisorid = request.json.get("supervisorID")

    if not jnumber or not firstname or not lastname or not projectid or not role or not supervisorid:
        return jsonify({"message": "You must fill in all field to create an employee"}), 400
    
    new_employee = Employees(jnumber = jnumber, firstname = firstname, lastname = lastname, projectid = projectid, role = role, supervisorid = supervisorid)

    try:
        db.session.add(new_employee)
        db.session.commit()
    except Exception as e:
        return jsonify()
    
@app.route("/get_employee/<int:employee_jNumber>", methods=["GET"])
def get_employee(employee_jNumber):
    employee = Employees.query.get(employee_jNumber)
    return jsonify({"employee": employee.to_json()})

@app.route("/delete_employee/<int:employee_jNumber>", methods=["DELETE"])
def delete_employee(employee_jNumber):
    employee = Employees.query.get(employee_jNumber)
    if employee is None:
        return jsonify({"message": "Invalid employee id"}), 400
    
    db.session.delete(employee)
    db.session.commit()
    return jsonify({"message": "Employee deleted successfully"}), 200

if __name__ == "__main__": 
    with app.app_context(): 
        db.create_all()

    app.run(debug=True)
