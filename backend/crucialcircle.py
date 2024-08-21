from flask import (Flask, render_template, redirect, url_for, flash, session)
from flask_behind_proxy import FlaskBehindProxy
from forms import SignUpForm, SignInForm, ForumPost


app = Flask(__name__)
proxied = FlaskBehindProxy(app)
app.config['SECRET_KEY'] = 'so unique and secret'  # noqa
global logged_in


class User():
    username = ''
    first_name = ''
    last_name = ''
    email = ''
    password = ''


class Post():
    user_id = ''
    likes = []
    comments = []


@app.route('/')
@app.route('/home')
def home(): # on home page
    if 'email' in session:
        user = User.query.filter_by(email=session['email']).first()
        logged_in = True
        return render_template('home.html', user=user, logged_in=True)
    else:
        logged_in = False
        return render_template('home.html', logged_in=False)
    

@app.route('/register', methods=['GET'])
def register():
    signup = SignUpForm()
    signin = SignInForm()
    logged_in = False

    if signup.validate_on_submit():
        existing_user = User.query.filter_by(email=signup.email.data).first()
        if existing_user:
            flash('Email already exists. Please use a different email.')
            return redirect(url_for('register'))
        elif '.cuny.edu' not in signup.email.data:
            flash('Email must be a .cuny.edu email.')
        else:
            user_id = getUsername(signup)
            user = User(username=user_id,
                        first_name=signup.first_name.data,
                        last_name=signup.last_name.data,
                        email=signup.email.data,
                        password=signup.password.data)
            logged_in = True
#            db.session.add(user)
#            db.session.commit()
            flash(f'Account created for {signup.first_name.data}!')
            session['email'] = signup.email.data
            return redirect(url_for('home'))
    return render_template('register.html', signup=signup, signin=signin, logged_in=logged_in)


@app.route('/forum', methods=['GET'])
def forum():
    if 'email' in session:
        logged_in = True
    else:
        logged_in = False
    form = ForumPost()
    if form.validate_on_submit():
        post_body = form.body.data
    return render_template('forum.html', form=form, logged_in=logged_in)


def getUsername(input_form):
    user_email = input_form.email.data  # get entire email
    username = ''
    i = 0
    char = user_email[0]
    
    while char != '@':
        char = user_email[i]
        username += char
        i += 1
    
    return username


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
