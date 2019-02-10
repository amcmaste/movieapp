#Imports
from flask_wtf import FlaskForm
from wtforms import StringField, FileField, SubmitField
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