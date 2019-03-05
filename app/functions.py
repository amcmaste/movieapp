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
	db.session.commit()
	
	#Verify that new entry exists
	result = User.query.filter_by(username=current_user.username).first()
	return str(result.favorite)

def write_movie(title, path):
	movie = Movie(movie_title=title, path_to_img=path)
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

def write_answer(title, question, text):
	movie_number = Movie.query.filter_by(movie_title=title).first().id
	question_number = Question.query.filter_by(question_text=question).first().id
	answer = Answer(movie_id=int(movie_number),question_id=int(question_number), answer_text=text)
	db.session.add(answer)
	db.session.commit()
	
	#Verify that new entry exists
	result = Answer.query.filter_by(answer_text=text).first()
	return str(result.answer_text)
	
def pack_movie(movie):
	return {
	'id' : movie.id,
	'imdb' : movie.imdb_id,
	'title' : movie.movie_title
	}
	
def pack_questions(questions):
	output = []
	for question in questions:
		if len(question.question_text) > 100:
			shortened = question.question_text[0:99] + '...'
		else:
			shortened = question.question_text
		packed = {
			'id' : question.id,
			'user_id' : question.user_id,
			'movie_id' : question.movie_id,
			'question_text' : question.question_text,
			'shortened_text' : shortened,
			'create_datetime' : question.create_datetime,
			'points' : question.points,
			'level' : question.level,
			'badge' : question.badge
		}
		output.append(packed)
	return output
	
def pack_answers(answers):
	output = []
	for answer in answers:
		if len(answer.answer_text) > 100:
			shortened = answer.answer_text[0:99] + '...'
		else:
			shortened = answer.answer_text
		packed = {
			'id' : answer.id,
			'user_id' : answer.user_id,
			'movie_id' : answer.movie_id,
			'question_id' : answer.question_id,
			'answer_text' : answer.answer_text,
			'shortened_text' : shortened,
			'create_datetime' : answer.create_datetime,
			'points' : answer.points,
			'level' : answer.level,
			'badge' : answer.badge
		}
		output.append(packed)
	return output