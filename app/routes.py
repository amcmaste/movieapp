#Imports
from flask import render_template, request, redirect, url_for, jsonify
from flask_login import current_user, login_user
from app import app
from app.forms import LoginForm, SignupForm, ProfileForm, SelectMovieForm, MovieForm, QuestionForm, AnswerForm
from app.functions import write_user, write_profile, write_movie, write_question, write_answer, pack_movie
from app.models import User, Movie, Question, Answer

#Route defintions
@app.route('/about', methods=['GET'])
def home():
	return render_template('home.html')

@app.route('/signup', methods=['GET'])
def signup():
	signup = SignupForm()
	return render_template('signup.html', form=signup)
	
@app.route('/edit-profile', methods=['GET'])
def profile():
	profile = ProfileForm()
	return render_template('editprofile.html', form=profile)
	
@app.route('/add-movie', methods=['GET'])
def movie():
	movie = MovieForm()
	return render_template('addmovie.html', form=movie)
	
@app.route('/add-question', methods=['GET'])
def question():
	question = QuestionForm()
	return render_template('addquestion.html', form=question)
	
@app.route('/add-answer', methods=['GET'])
def answer():
	answer = AnswerForm()
	return render_template('addanswer.html', form=answer)

#Views with database integration
@app.route('/submit-user', methods=['GET', 'POST'])
def submit_user():
	confirmation = write_user(request.form['username'], request.form['email'], request.form['pword'])
	return confirmation

@app.route('/modify-profile', methods=['GET', 'POST'])
def modify_profile():
	confirmation = write_profile(request.form['favorite'])
	return confirmation
	
@app.route('/submit-movie', methods=['GET', 'POST'])
def submit_movie():
	confirmation = write_movie(request.form['title'])
	return confirmation
	
@app.route('/submit-question', methods=['GET', 'POST'])
def submit_question():
	confirmation = write_question(request.form['title'], request.form['question'])
	return confirmation
	
@app.route('/submit-answer', methods=['GET', 'POST'])
def submit_answer():
	confirmation = write_answer(request.form['title'], request.form['question'], request.form['answer'])
	return confirmation
	
#Login form with logic from Flask Mega Tutorial
@app.route('/login', methods=['GET', 'POST'])
def login():
	
	form = LoginForm()
	
	if current_user.is_authenticated:
		return redirect(url_for('main'))
	
	if form.validate_on_submit():
		user = User.query.filter_by(username=form.username.data).first()
		if user is None or not user.check_password(form.password.data):
			return redirect(url_for('login'))
		else:
			login_user(user)
			return redirect(url_for('main'))

	return render_template('login.html', form=form)
	
#Templates based on 'MAIN'

#Initial 'MAIN' template with login refresh
@app.route('/', methods=['GET', 'POST'])	
@app.route('/main', methods=['GET', 'POST'])
def main():
	login = LoginForm()
	select = SelectMovieForm()
	user = current_user
	movie = ''
	questions = ''
	answers = ''
	
	#Login logic
	if login.login_submit.data and login.validate():
		user = User.query.filter_by(username=login.username.data).first()
		if user is None or not user.check_password(login.password.data):
			return render_template('main.html', login=login, select=select, user=user, movie=movie, questions=questions, answers=answers)
		else:
			login_user(user)
			return render_template('main.html', login=login, select=select, user=user, movie=movie, questions=questions, answers=answers)
	
	#Initial render
	return render_template('main.html', login=login, select=select, user=user, movie=movie, questions=questions, answers=answers)

#Select Movie helper function
@app.route('/select-movie', methods=['GET'])
def select_movie():
	title = request.args.get('title')
	movie = Movie.query.search(title).limit(1).first()
	output = pack_movie(movie)
	return jsonify(output)