from flask import (
    Flask,
    abort,
    jsonify,
    render_template,
    request )
from mongoengine import connect
import pymongo
import os

app = Flask(__name__)

if os.getenv('MONGOLAB_URI') is not None: # on Heroku
    mongolab_uri = os.getenv('MONGOLAB_URI')
    db = mongolab_uri[mongolab_uri.rfind('/')+1:] #extract the database name
    connect(db, host=mongolab_uri)
else: # on Cloud9
    connect('mempydemo')

@app.route('/')
def index():
    return render_template('index.html')
    
if __name__ == '__main__':
    port = int(os.getenv('PORT', 8080))
    host = os.getenv('IP', '0.0.0.0')
    app.run(port=port, host=host)