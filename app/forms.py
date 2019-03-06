#Imports
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, FileField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo
from wtforms.fields.html5 import EmailField

#Form defintion
class LoginForm(FlaskForm):
	username = StringField('Username', id="username", validators=[DataRequired()])
	password = PasswordField('Password', id="password", validators=[DataRequired()])
	login_submit = SubmitField('Submit', id="login-submit")
	
class SignupForm(FlaskForm):
	username = StringField('Username', id="username", validators=[DataRequired()])
	email = EmailField('Email', id="email", validators=[DataRequired(), Email()])
	password = PasswordField('Password', id="password", validators=[DataRequired()])
	verfiy = PasswordField('Confirm Password', id="verify", validators=[DataRequired(), 
	    EqualTo('password')])
	submit = SubmitField('Submit', id="submit")
	
class SelectMovieForm(FlaskForm):
	title = StringField('Movie Title', id="title", validators=[DataRequired()])
	movie_submit = SubmitField('Submit', id="movie-submit")
	
class ProfileForm(FlaskForm):
	favorite = StringField('Favorite Movie', id="favorite", validators=[DataRequired()])
	profile = FileField('Profile Picture', id="profile")
	submit = SubmitField('Submit', id="submit")
	
class MovieForm(FlaskForm):
	title = StringField('Movie Title', id="title", validators=[DataRequired()])
	cover = FileField('Cover Image', id="cover")
	submit = SubmitField('Submit', id="submit")

class QuestionForm(FlaskForm):
	question = TextAreaField('Question', id="question", validators=[DataRequired()])
	submit = SubmitField('Submit', id="question-submit")
	
class AnswerForm(FlaskForm):
	answer = TextAreaField('Answer', id="answer", validators=[DataRequired()])
	submit = SubmitField('Submit', id="answer-submit")