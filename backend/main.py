from flask_cors import CORS
from flask import (Flask, render_template,
                   request,
                   jsonify)
from flask_pymongo import Pymongo
import pymongo
import bcrypt
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Allow all origins or specify your frontend origin
## testing database ##
app.secret_key = 'testing'

app.config['MONGO_URI'] = 'mongodb://localhost:27017/'  # Update URI as needed
mongo = Pymongo(app)
c = MongoClient()

client = pymongo.MongoClient('mongodb+srv://laraschuman:laraschuman@testing.jr3jj.mongodb.net/?retryWrites=true&w=majority&appName=Testing')
db = client.get_database('total_records')
users_collection = db['users_collection']  
posts_collection = db['posts']  


# @app.route('/api/users', methods=['GET'])
# def users():
#     return jsonify(
#         {
#             "users": [
#                 'arpan',
#                 'zach',
#                 'jesse'
#             ]
#         }
#     )


def submit_form(data):
    firstName = data[1]
    lastName = data[2]
    email = data[3]
    password = data[4]
    username = data[5]

    existing_user = users_collection.find_one({'email': email})
    
    hashpass = bcrypt.hashpw(request.data['password'].encode('utf-8'),bcrypt.gensalt())

    if existing_user:
        return False
    
    new_user = {
                'username': username,
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'password': hashpass.decode('utf-8')
            }
    
    users_collection.insert_one(new_user)

    return True


@app.route('/api/login', methods=['GET', 'POST'])
def login():
    data = request.get_json()  # data is an array of [email, password]
    data.insert(0, False)

    email = data[0]
    password = data[1]
    # do something here to check if email exists in database
    user = users_collection.find_one({'email':email})
    # if exists, set data[0] = True
    if user:
        data[0] = True
        if bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"error": "Invalid password"}), 401
    else:
        return jsonify({"error": "User not found"}), 404

    return jsonify(data), 200  # data is an array of [boolean, fname, lname, email, password, username]


@app.route('/api/register', methods=['GET', 'POST'])
def register():
    data = request.get_json()  # data is an array of [fname, lname, email, password]

    username = create_username(data[2])
    
    data.append(username)

    data.insert(0, False)
    
    if submit_form(data):  # checks if user (or email) exists in database, if not adds to db
        data[0] = True

    return data  # data is an array of [boolean, fname, lname, email, password, username]


# create username by parsing through user email:
def create_username(email):
    return email.split('@')[0]
    '''username = ''
    i = 0
    char = email[0]

    while char != '@':
        username += char
        i += 1
        char = email[i]

    return username'''
@app.route('/api/posts', methods=['POST'])
def create_posts():
    data = request.get_json()
    posts = data.get('posts')

    inserted_ids = []

    for post in posts:
        title = post[0]
        category = post[1]
        content = post[2]
        username = post[3]

        new_post = {
            'title': title,
            'category': category,
            'content': content,
            'username': username
        }

        result = posts_collection.insert_one(new_post)
        inserted_ids.append(str(result.inserted_id))

    return jsonify({"message": "Posts created", "post_ids": inserted_ids}), 201


@app.route('/discussions', methods=['GET', 'POST'])
def discussions(): # gets posts
    data = request.get_json()

    # example of what posts looks like:
    # posts = {
    #     0: {
    #         'user': 'rafid',
    #         'title': 'why one piece is the best',
    #         'category': 'facts, non-fiction',
    #         'likes': 35,
    #         'body': 'here is why one piece is the best'
    #     },
    #     1: {
    #         'user': 'alysa',
    #         'title': 'why hzd is the best',
    #         'category': 'facts, non-fiction',
    #         'likes': 27,
    #         'body': 'here is why hzd is the best'
    #     }
    # }

    posts = {}

    # get posts from database
        # append details into posts dictionary

    # print(posts)  # test print

    return posts

if __name__ == "__main__":
    app.run(debug=True, port=5000)

