from flask import Flask
import os

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
    return 'Hello MEMpy'

# MONGOLAB_URI = 
if os.getenv('MONGOLAB_URI'):
    _game = {"hello":1}

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8080))
    host = os.getenv('IP', '0.0.0.0')
    app.run(port=port, host=host)

# from flask import (
#     Flask,
#     abort,
#     jsonify,
#     render_template,
#     request )
# from mongoengine import connect
# import pymongo
# import os

# app = Flask(__name__)
# app.debug = True

# _game = {"hmm":1}

# # MONGOLAB_URI = 
# if os.getenv('MONGOLAB_URI'):
#     _game = {"hello":1}

# connection = pymongo.MongoClient('MONGOLAB_URI')
# db = connection.grit
# games = db.games

# # games.insert_one({"players": [1, 2]})

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     # games.insert({"players": [3, 4]})
#     # _game = games.find()
#     return render_template('index.html', game = _game)
    
# if __name__ == '__main__':
#     app.run(port=8080, host='0.0.0.0')