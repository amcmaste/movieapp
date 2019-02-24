#Imports
from flask import render_template, request, redirect, url_for, jsonify
from flask_login import current_user, login_user
from app import app
from app.forms import LoginForm, SignupForm, ProfileForm, SelectMovieForm, MovieForm, QuestionForm, AnswerForm
from app.functions import write_user, write_profile, write_movie, write_question, write_answer, pack_movie, pack_questions, pack_answers
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
	#Pull and package movie data
	title = request.args.get('title')
	movie = Movie.query.search(title).limit(1).first()
	movie_data = pack_movie(movie)
	
	#Pull and package question data
	id = movie.id
	questions = Question.query.filter_by(movie_id=id).order_by('id desc').limit(5).all()
	question_data = pack_questions(questions)
	
	#Return output
	return jsonify([movie_data, question_data])
	
@app.route('/select-question', methods=['GET'])
def select_question():
	#Pull and package question data
	number = request.args.get('number')
	questions = Question.query.filter_by(id=number).first()
	if not isinstance(questions, list):
	  questions = [questions]
	question_data = pack_questions(questions)
	
	#Pull and package answers data
	number = request.args.get('number')
	answers = Answer.query.filter_by(question_id=number).order_by('id desc').limit(5).all()
	if not isinstance(answers, list):
	  answers = [answers]
	answer_data = pack_answers(answers)
	
	#Return output
	return jsonify([question_data, answer_data])
	
@app.route('/select-answer', methods=['GET'])
def select_answer():
	#Pull and package answers data
	number = request.args.get('number')
	answers = Answer.query.filter_by(id=number).limit(1).first()
	if not isinstance(answers, list):
	  answers = [answers]
	answer_data = pack_answers(answers)
	
	#Return output
	return jsonify(answer_data)
	
@app.route('/expand-answers', methods=['GET'])
def expand_answer():
	#Pull and package question data
	anumber = request.args.get('number')
	qnumber = Answer.query.filter_by(id=anumber).first()
	questions = Question.query.filter_by(id=qnumber.question_id).first()
	if not isinstance(questions, list):
	  questions = [questions]
	question_data = pack_questions(questions)
	
	#Pull and package answers data
	answers = Answer.query.filter_by(question_id=qnumber.question_id).order_by('id desc').limit(5).all()
	if not isinstance(answers, list):
	  answers = [answers]
	answer_data = pack_answers(answers)
	
	#Return output
	return jsonify([question_data, answer_data])
	
@app.route('/more-questions', methods=['GET'])
def more_questions():
	#Pull and package movie data
	title = request.args.get('title')
	movie = Movie.query.search(title).limit(1).first()
	movie_data = pack_movie(movie)
	
	#Pull and package question data
	page = request.args.get('number')
	off = int(page) * 5
	id = movie.id
	questions = Question.query.filter_by(movie_id=id).order_by('id desc').offset(off).limit(5).all()
	question_data = pack_questions(questions)
	
	#Return output
	return jsonify([movie_data, question_data, page])
	
@app.route('/more-answers', methods=['GET'])
def more_answers():
	#Pull and package question data
	anumber = request.args.get('number')
	qnumber = Answer.query.filter_by(id=anumber).first()
	questions = Question.query.filter_by(id=qnumber.question_id).first()
	if not isinstance(questions, list):
	  questions = [questions]
	question_data = pack_questions(questions)
	
	#Pull and package answers data
	page = request.args.get('page')
	off = int(page) * 5
	answers = Answer.query.filter_by(question_id=qnumber.question_id).order_by('id desc').offset(off).limit(5).all()
	if not isinstance(answers, list):
	  answers = [answers]
	answer_data = pack_answers(answers)
	
	#Return output
	return jsonify([question_data, answer_data, page])