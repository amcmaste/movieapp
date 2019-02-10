#Imports
from flask import render_template
from app import app
from app.forms import LoginForm, SignupForm

#Route defintions
@app.route('/', methods=['GET'])
def home():
	return render_template('home.html')
	
@app.route('/login', methods=['GET'])
def login():
	login = LoginForm()
	return render_template('login.html', form=login)

@app.route('/signup', methods=['GET'])
def signup():
	signup = SignupForm()
	return render_template('signup.html', form=signup)