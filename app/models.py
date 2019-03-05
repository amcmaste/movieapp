#Imports
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from flask_login import UserMixin
from app import db
from app import login

#New Imports
from flask_sqlalchemy import SQLAlchemy, BaseQuery
from sqlalchemy_searchable import SearchQueryMixin
from sqlalchemy_utils.types import TSVectorType
from sqlalchemy_searchable import make_searchable

make_searchable(db.metadata)

#Database models
class User(UserMixin, db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(128), index=True, unique=True)
	email = db.Column(db.String(128), index=True, unique=True)
	password_hash = db.Column(db.String(128))
	path_to_img = db.Column(db.String(128))
	fav_movie = db.Column(db.Integer, db.ForeignKey('movie.id'))
	user_text = db.Column(db.Text, unique=True)
	join_datetime = db.Column(db.DateTime, index=True, default=datetime.utcnow)
	points = db.Column(db.Integer, index=True, default=0)
	level = db.Column(db.Integer, default=0)
	badge = db.Column(db.String(128))
	questions = db.relationship('Question', backref='question_owner', lazy='dynamic')
	answers = db.relationship('Answer', backref='answer_owner', lazy='dynamic')
	
	def set_password(self, password):
		self.password_hash = generate_password_hash(password)
		
	def check_password(self, password):
		return check_password_hash(self.password_hash, password)

class MovieQuery(BaseQuery, SearchQueryMixin):
	pass
		
class Movie(db.Model):
	query_class = MovieQuery
	__tablename__ = 'movie'
	id = db.Column(db.Integer, primary_key=True)
	imdb_id = db.Column(db.String(128), index= True, unique=True)
	movie_title = db.Column(db.Unicode(255), index=True, unique=True)
	path_to_img = db.Column(db.String(128))
	directed_by = db.Column(db.String(128))
	summary_text = db.Column(db.Text, unique=True)
	release_date = db.Column(db.DateTime, index=True)
	create_datetime = db.Column(db.DateTime, index=True, default=datetime.utcnow)
	points = db.Column(db.Integer, index=True, default=0)
	level = db.Column(db.Integer, default=0)
	badge = db.Column(db.String(128))
	users = db.relationship('User', backref='favorited_by', lazy='dynamic')
	questions = db.relationship('Question', backref='movie_referenced_by_question', lazy='dynamic')
	answers = db.relationship('Answer', backref='movie_referenced_by_answer', lazy='dynamic')
	search_vector = db.Column(TSVectorType('movie_title'))

class Question(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'), index=True)
	movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), index=True)
	question_text = db.Column(db.Text)
	create_datetime = db.Column(db.DateTime, index=True, default=datetime.utcnow)
	points = db.Column(db.Integer, index=True, default=0)
	level = db.Column(db.Integer, default=0)
	badge = db.Column(db.String(128))
	answers = db.relationship('Answer', backref='question_referenced_by_answer', lazy='dynamic')
	question_votes = db.relationship('QuestionVotes', backref='question_voted_on', lazy='dynamic')

class Answer(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'), index=True)
	movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), index=True)
	question_id = db.Column(db.Integer, db.ForeignKey('question.id'), index=True)
	answer_text = db.Column(db.Text)
	create_datetime = db.Column(db.DateTime, index=True, default=datetime.utcnow)
	points = db.Column(db.Integer, index=True, default=0)
	level = db.Column(db.Integer, default=0)
	badge = db.Column(db.String(128))
	answer_votes = db.relationship('AnswerVotes', backref='answer_voted_on', lazy='dynamic')
	
class QuestionVotes(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'), index=True)
	question_id = db.Column(db.Integer, db.ForeignKey('question.id'), index=True)
		
class AnswerVotes(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'), index=True)
	answer_id = db.Column(db.Integer, db.ForeignKey('answer.id'), index=True)

#Flask-Login User Loader Function
@login.user_loader
def load_user(id):
	return User.query.get(int(id))
	
#SQLAlchemy_searchable configuration
db.configure_mappers()