from flask import (Flask, render_template, redirect, url_for, flash, session)
from flask_behind_proxy import FlaskBehindProxy
from forms import SignUpForm, SignInForm, ForumPost
from forms import Flask, request, jsonify
import pymongo

app = Flask(__name__)
proxied = FlaskBehindProxy(app)
app.config['SECRET_KEY'] = 'so unique and secret'  # noqa
global logged_in

## testing database ##
app.secret_key = 'testing'
# global logged_in

user = pymongo.MongoClient('mongodb+srv://laraschuman:laraschuman@testing.jr3jj.mongodb.net/?retryWrites=true&w=majority&appName=Testing')
db = user.get_database('total_records')
users_collection = db.user

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


# @app.route('/')
# @app.route('/home')
# def home():
#     if 'email' in session:
#         user = User.query.filter_by(email=session['email']).first()
#         logged_in = True
#         return render_template('home.html', user=user, logged_in=True)
#     else:
#         logged_in = False
#         return render_template('home.html', logged_in=False)
    

@app.route('/api/register', methods=['GET','POST'])
def register():
    signup = SignUpForm()
    # logged_in = False

    if signup.validate_on_submit():
        if request.method == 'POST':
            users = mongo.db.users_collection
            existing_user = users.find_one({'email': request.signup['email']})
        #existing_user = User.query.filter_by(email=signup.email.data).first()
        if existing_user:
            print("temp")
            # flash('Email already exists. Please use a different email.')
            # return redirect(url_for('register'))
        else:
            user_id = getUsername(signup)
            new_user = {
                'username':user_id,
                'first_name': signup.first_name.data,
                'last_name': signup.last_name.data,
                'email': signup.email.data,
                'password': signup.password.data
            }
            users_collection.insert_one(new_user)
            # logged_in = True
            # flash(f'Account created for {signup.first_name.data}!')
            # session['email'] = signup.email.data
            return redirect(url_for('home'))  # ?
    return render_template('register.html', signup=signup, signin=signin, logged_in=logged_in)  # ?

@app.route('/login', methods = ['GET'])
def login():  
    signin = SignInForm()
    return ''

# @app.route('/api/forum', methods=['GET'])
# def forum():
#     # if 'email' in session:
#     #     logged_in = True
#     # else:
#     #     logged_in = False
#     form = ForumPost()
#     if form.validate_on_submit():
#         post_body = form.body.data
#     return render_template('forum.html', form=form, logged_in=logged_in)

@app.route('/api/users', methods=['GET'])
def getUsername(input_form):
    user_email = input_form.email.data  # get entire email
    username = ''
    i = 0
    char = user_email[0]
    
    while char != '@':
        char = user_email[i]
        username += char
        i += 1
    
    return jsonify(username)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')