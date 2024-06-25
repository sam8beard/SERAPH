from flask import render_template, Blueprint, request, redirect, url_for
from flask_login import login_required, current_user
from .models import customer, employees, sprints  , war, milestones
from ... import db
from sqlalchemy import func

views = Blueprint('views', __name__)

