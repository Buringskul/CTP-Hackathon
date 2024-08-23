from flask_cors import CORS
from flask import (Flask, render_template,
                   request,
                   jsonify)
import pymongo
import bcrypt

app = Flask(__name__)
cors = CORS(app, origins='*')  # specify origins
# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:5173/register"
# ]

## testing database ##
app.secret_key = 'testing'
# global logged_in

client = pymongo.MongoClient('mongodb+srv://laraschuman:laraschuman@testing.jr3jj.mongodb.net/?retryWrites=true&w=majority&appName=Testing')
db = client.get_database('total_records')
users_collection = db['users_collection']  

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        {
            "users": [
                'arpan',
                'zach',
                'jesse'
            ]
        }
    )

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
                'username':create_username(email),
                'firstName': f_name,
                'lastName': l_name,
                'email': email,
                'password': hashpass.decode('utf-8')
            }
    return jsonify({"message":"Data received successfully!"}), 200


@app.route('/api/login', methods=['GET', 'POST'])
def login():
    data = request.get_json()  # data is an array of [email, password]

    # do something here to check if email exists in database

    # print(data)
    return data  # possibly return boolean? True if existing, else False


@app.route('/api/register', methods=['GET', 'POST'])
def register():
    data = request.get_json()  # data is an array of [fname, lname, email, password]
    # print('Hello, World!')  # Print for testing

    username = create_username(data[2])
    print(username)

    if request.method == 'POST':
        return submit_form()
    return render_template('register.html')
    # do something here to check if user (or email) exists in database

    # do something here to add user to database

    print(data)
    return data # possibly return boolean, or array with a boolean and a string for username


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

