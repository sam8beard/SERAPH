from flask import Blueprint, render_template, request, redirect, url_for
from .models import Sprint
from . import db
from datetime import datetime

auth = Blueprint('auth', __name__)

@auth.route('/sprints', methods=['GET', 'POST'])
def sprint():
    if request.method == 'POST':
        # Extract form data
        sprint_id = request.form.get('sprintid')
        project_id = request.form.get('projectid')
        start_date = request.form.get('startdate')
        end_date = request.form.get('enddate')
        commited_load = request.form.get('commitedload')
        uncommited_load = request.form.get('uncommitedload')
        completed = request.form.get('completed')
        notes = request.form.get('notes')

        # Convert date strings to datetime objects
        start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
        end_date = datetime.strptime(end_date, '%Y-%m-%d').date()

        # Create a new Sprint object
        new_sprint = sprint(
            sprint_id=sprint_id,
            project_id=project_id,
            start_date=start_date,
            end_date=end_date,
            commited_load=commited_load,
            uncommited_load=uncommited_load,
            completed=completed,
            notes=notes
        )

        # Add and commit the new sprint to the database
        db.session.add(new_sprint)
        db.session.commit()

        # Redirect to the sprints page after successful form submission
        return redirect(url_for('auth.sprints'))  # Redirect to the sprints route

    # If GET request or after successful POST (redirected back), render the form
    return render_template('register.html')
