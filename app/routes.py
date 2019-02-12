#Imports
from flask import render_template
from app import app
from app.forms import LoginForm, SignupForm, ProfileForm, MovieForm, QuestionForm, AnswerForm
from app.placeholders import User, Movie, Question, Answer

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
	
@app.route('/editprofile', methods=['GET'])
def profile():
	profile = ProfileForm()
	return render_template('editprofile.html', form=profile)
	
@app.route('/addmovie', methods=['GET'])
def movie():
	movie = MovieForm()
	return render_template('addmovie.html', form=movie)
	
@app.route('/addquestion', methods=['GET'])
def question():
	question = QuestionForm()
	return render_template('addquestion.html', form=question)
	
@app.route('/addanswer', methods=['GET'])
def answer():
	answer = AnswerForm()
	return render_template('addanswer.html', form=answer)
	
@app.route('/main', methods=['GET'])
def main():
	user = User
	movie = Movie
	question = Question
	answer = Answer
	return render_template('main.html', user=user, movie=movie, question=question, answer=answer)