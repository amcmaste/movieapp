#Imports
from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_bootstrap import Bootstrap
from sqlalchemy.orm import configure_mappers

#Initializations + configurations
app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)
bootstrap = Bootstrap(app)

#Additonal imports (non-circular)
from app import routes, models

#Initialize SQLAlchemy_searchable
# db.drop_all()
db.configure_mappers()
db.create_all()
db.session.commit()