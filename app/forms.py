#Imports
from flask_wtf import FlaskForm
from wtforms import StringField, FileField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo

#Form defintion
class LoginForm(FlaskForm):
	username = StringField('Username', id="username", validators=[DataRequired()])
	password = StringField('Password', id="password", validators=[DataRequired()])
	submit = SubmitField('Submit', id="submit")
	
class SignupForm(FlaskForm):
	username = StringField('Username', id="username", validators=[DataRequired()])
	email = StringField('Email', id="email", validators=[DataRequired(), Email()])
	password = StringField('Password', id="password", validators=[DataRequired()])
	verfiy = StringField('Confirm Password', id="verify", validators=[DataRequired(), 
	EqualTo('password')])
	submit = SubmitField('Submit', id="submit")
	
class ProfileForm(FlaskForm):
	favorite = StringField('Favorite Movie', id="favorite", validators=[DataRequired()])
	profile = FileField('Profile Picture', id="profile", validators=[DataRequired()])
	submit = SubmitField('Submit', id="submit")
	
class MovieForm(FlaskForm):
	title = StringField('Movie Title', id="title", validators=[DataRequired()])
	cover = FileField('Cover Image', id="cover", validators=[DataRequired()])
	submit = SubmitField('Submit', id="submit")

class QuestionForm(FlaskForm):
	title = StringField('Movie Title', id="title", validators=[DataRequired()])
	question = TextAreaField('Question', id="question", validators=[DataRequired()])
	submit = SubmitField('Submit', id="submit")
	
class AnswerForm(FlaskForm):
	title = StringField('Movie Title', id="title", validators=[DataRequired()])
	answer = TextAreaField('Answer', id="question", validators=[DataRequired()])
	submit = SubmitField('Submit', id="submit")