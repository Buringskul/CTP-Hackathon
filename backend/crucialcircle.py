import bcrypt
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

client = pymongo.MongoClient('mongodb+srv://laraschuman:laraschuman@testing.jr3jj.mongodb.net/?retryWrites=true&w=majority&appName=Testing')
db = client.get_database('total_records')
users_collection = db['users_collection']  

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
    
def submit_form():
    data = request.json

    if not data:
        return jsonify({"error": "No data provided"}), 400
    f_name = data.get('firstName')
    l_name = data.get('lastName')
    email = data.get('email')
    password = data.get('password')

    if not all([f_name, l_name, email, password]):
        return jsonify({"error": "All fields are required"}), 400
    existing_user = users_collection.find_one({'email': email})
    
    hashpass = bcrypt.hashpw(request.signup['password'].encode('utf-8'),bcrypt.gensalt())

    if existing_user:
        return jsonify({"error": "User with this email already exists"}), 400
    
    new_user = {
                'username':getUsername(email),
                'firstName': f_name,
                'lastName': l_name,
                'email': email,
                'password': hashpass.decode('utf-8')
            }
    return jsonify({"message":"Data received successfully!"}), 200

@app.route('/api/register', methods=['GET','POST'])
def register():
    if request.method == 'POST':
           return submit_form()
    return render_template('register.html')

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
