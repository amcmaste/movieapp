#Imports
from app import db
from app.models import User, Movie, Question, Answer

#Functions
def write_user(username, email, password):
	#Add new user to database
	user = User(username=username, email=email)
	user.set_password(password)
	db.session.add(user)
	db.session.commit()
	
	#Verify that new entry exists
	result = User.query.filter_by(username=username).first()
	return str(result.username)