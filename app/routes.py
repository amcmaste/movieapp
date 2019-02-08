#Imports
from flask import render_template
from app import app

#Route defintions
@app.route('/', methods=['GET'])
def home():
	return render_template('home.html')