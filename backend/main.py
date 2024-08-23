from flask_cors import CORS
from flask import (Flask, render_template,
                   request,
                   jsonify)
import pymongo
import bcrypt

app = Flask(__name__)
cors = CORS(app, origins='*')  # specify origins

## testing database ##
app.secret_key = 'testing'

client = pymongo.MongoClient('mongodb+srv://laraschuman:laraschuman@testing.jr3jj.mongodb.net/?retryWrites=true&w=majority&appName=Testing')
db = client.get_database('total_records')
users_collection = db['users_collection']  

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
    f_name = data[1]
    l_name = data[2]
    email = data[3]
    password = data[4]
    username = data[5]

    existing_user = users_collection.find_one({'email': email})
    
    hashpass = bcrypt.hashpw(request.signup['password'].encode('utf-8'),bcrypt.gensalt())

    if existing_user:
        return False
    
    new_user = {
                'username': username,
                'firstName': f_name,
                'lastName': l_name,
                'email': email,
                'password': hashpass.decode('utf-8')
            }
    return True


@app.route('/api/login', methods=['GET', 'POST'])
def login():
    data = request.get_json()  # data is an array of [email, password]
    data.insert(0, False)

    # do something here to check if email exists in database
    # if exists, set data[0] = True

    # print(data)
    return data  # data is an array of [boolean, fname, lname, email, password, username]


@app.route('/api/register', methods=['GET', 'POST'])
def register():
    data = request.get_json()  # data is an array of [fname, lname, email, password]
    # print('Hello, World!')  # Print for testing

    username = create_username(data[2])
    print(username)
    data.append(username)

    data.insert(0, False)

    if request.method == 'POST':
        data[0] = submit_form(data)  # checks if user (or email) exists in database, if not adds to db

    print(data)
    return data  # data is an array of [boolean, fname, lname, email, password, username]


# create username by parsing through user email:
def create_username(email):
    username = ''
    i = 0
    char = email[0]

    while char != '@':
        username += char
        i += 1
        char = email[i]

    return username


if __name__ == "__main__":
    app.run(debug=True, port=5000)

