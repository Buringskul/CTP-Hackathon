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


@app.route('/api/register', methods=['GET', 'POST'])
def register():
    data = request.get_json()
    print('Hello World', flush=True)
    return data


if __name__ == "__main__":
    app.run(debug=True, port=5000)
