#Imports
from flask import render_template
from app import app
from app.forms import LoginForm, SignupForm, ProfileForm, MovieForm, QuestionForm, AnswerForm
from app.placeholders import User, Movie, Question_One, Question_Two, Question_Three, Question_Four, Question_Five, Answer_One, Answer_Two, Answer_Three, Answer_Four, Answer_Five

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
	questions = [Question_One, Question_Two, Question_Three, Question_Four, Question_Five]
	question_one = questions[0]
	question_two = questions[1]
	question_three = questions[2]
	question_four = questions[3]
	question_five = questions[4]
	answers = [Answer_One, Answer_Two, Answer_Three, Answer_Four, Answer_Five]
	answer_one = answers[0]
	answer_two = answers[1]
	answer_three = answers[2]
	answer_four = answers[3]
	answer_five = answers[4]
	return render_template('main.html', user=user, movie=movie, questions=questions, 
	question_one=question_one, question_two=question_two, question_three=question_three,
	question_four=question_four, question_five=question_five, answers=answers, 
	answer_one=answer_one, answer_two=answer_two, answer_three=answer_three, 
	answer_four=answer_four, answer_five=answer_five)