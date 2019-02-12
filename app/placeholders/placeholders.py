#Define placeholder objects to substitute for database calls (temporarily)

class User(object):
	id = 101
	username = 'user'
	email = 'user@movieapp.com'
	password_hash = 'password'
	path_to_img = ''
	fav_movie = 201
	user_text = ''
	join_datetime = '02-11-2019-17-00-00'
	points = 0
	level = 0
	badge = ''

class Movie(object):
	id = 201
	movie_title = 'Casino Royale'
	path_to_img = ''
	directed_by = 'Martin Cambell'
	summary_text = '''Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.'''
	release_date = '17 November 2006'
	create_datetime = '02-11-2019-17-00-00'
	points = 0
	level = 0
	badge = ''

class Question(object):
	id = 301
	user_id = 301
	movie_id = 201
	question_text = '''What is Rosebud?'''
	create_datetime = '02-11-2019-17-00-00'
	points = 0
	level = 0
	badge = ''
	top = 1

class Answer(object):
	id = 401
	user_id = 101
	movie_id = 201
	question_id = 301
	answer_text = '''It is the name of his sled from childhood.'''
	create_datetime = '02-11-2019-17-00-00'
	points = 0
	level = 0
	badge = ''
	top = 1