#Imports
from app import db
from app.models import User, Movie, Question, Answer
from flask_login import current_user

#Functions
def write_user(username, email, password):
	user = User(username=username, email=email)
	user.set_password(password)
	db.session.add(user)
	db.session.commit()
	
	#Verify that new entry exists
	result = User.query.filter_by(username=username).first()
	return str(result.username)
	
def write_profile(favorite):
	user = User.query.filter_by(username=current_user.username).first()
	user.favorite = favorite
	db.session.add(user)
	db.session.commit()
	
	#Verify that new entry exists
	result = User.query.filter_by(username=current_user.username).first()
	return str(result.favorite)

def write_movie(title):
	movie = Movie(movie_title=title)
	db.session.add(movie)
	db.session.commit()
	
	#Verify that new entry exists
	result = Movie.query.filter_by(movie_title=title).first()
	return str(result.movie_title)

def write_question(title, text):
	movie_number = Movie.query.filter_by(movie_title=title).first().id
	question = Question(movie_id=int(movie_number), question_text=str(text))
	db.session.add(question)
	db.session.commit()
	
	#Verify that new entry exists
	result = Question.query.filter_by(question_text=text).first()
	return str(result.question_text)

def write_answer(title, text):
	title_number = Movie.query.filter_by(movie_title=title).first()
	answer = Answer(movie_id=title_number, answer_text=text)
	db.session.add(answer)
	db.session.commit()
	
	#Verify that new entry exists
	result = Answer.query.filter_by(answer_text=text).first()
	return str(result.answer_text)