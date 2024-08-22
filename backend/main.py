from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')  # specify origins


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


if __name__ == "__main__":
    app.run(debug=True, port=5000)
