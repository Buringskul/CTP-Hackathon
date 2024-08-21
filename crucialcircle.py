from flask import Flask
from flask_behind_proxy import FlaskBehindProxy
from flask_sqlalchemy import SQLAlchemy
from forms import SignUpForm, SignInForm


app = Flask(__name__)
proxied = FlaskBehindProxy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userinfo.db'

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    saved_recipes = db.Column(db.String(), nullable=True)

    def __repr__(self):
        return f'{self.name}', '{self.email}'
