from flask_cors import CORS
from flask import (Flask,
                   request,
                   jsonify)

app = Flask(__name__)
cors = CORS(app, origins='*')  # specify origins
# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:5173/register"
# ]


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
