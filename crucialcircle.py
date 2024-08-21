from flask import (Flask, flash, session)
from flask_behind_proxy import FlaskBehindProxy
from flask_sqlalchemy import SQLAlchemy
from forms import SignUpForm, SignInForm


app = Flask(__name__)
proxied = FlaskBehindProxy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userinfo.db'

db = SQLAlchemy(app)
global logged_in


class User(db.Model):
    username = db.Column(db.String(), primary_key=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

#    def __repr__(self):
#        return f'{self.name}', '{self.email}'


def home(): # on home page
    if 'email' in session:
        user = User.query.filter_by(email=session['email']).first()
        logged_in = True
#        return render_template('home.html', user=user, logged_in=True)
    else:
        logged_in = False
#        return render_template('home.html', logged_in=False)
    

def register(): # on register page
    signup = SignUpForm()
    signin = SignInForm()
    logged_in = False

    if signup.validate_on_submit():
        existing_user = User.query.filter_by(email=signup.email.data).first()
        if existing_user:
            flash('Email already exists. Please use a different email.')
            return redirect(url_for('register'))
        else:
            user = User(name=signup.name.data,
                        email=signup.email.data,
                        password=signup.password.data,
                        saved_recipes='')
            logged_in = True
            db.session.add(user)
            db.session.commit()
            flash(f'Account created for {signup.name.data}!')
            session['email'] = signup.email.data
#            return redirect(url_for('home'))
        
