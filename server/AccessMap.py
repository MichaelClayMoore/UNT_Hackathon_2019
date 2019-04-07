##  START File !!
from flask import Flask, jsonify, request, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


test_page = Blueprint('test', __name__)

@test_page.route("/test", methods=['POST'])
def test():
    return "test"

app.register_blueprint(test_page)


if __name__ == '__main__':
    app.secret_key = 'mysecret'
    app.run(debug=True,port=5000)
