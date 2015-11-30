from flask import (
    Flask,
    abort,
    jsonify,
    render_template,
    request )
from mongoengine import connect
import pymongo
import os

app = Flask(__name__, static_url_path='')
app.debug = True

connection = pymongo.MongoClient(os.getenv('MONGOLAB_URI'))
db = connection.grit
games = db.games
games.remove()
games.insert_one({"_id":1, "players": [{"_id": "rich", "info": {"rating": 1200, "gamesPlayed": 0, "cards": ['2S', '3S', '4S', 'AH']}}, {"_id": "anthony",  "info": {"rating": 1200, "gamesPlayed": 0, "cards": ['5S', '6S', '7S', 'AS']}}]})
# games.insert_one({"players": [8, 9]})

# _game = games.find_one()


@app.route('/')
def index():
    _games = jsonify(games.find())
    return render_template('index.html', games = _games)
    
# @app.route('/game/<int:gameID>', methods=['GET', 'POST'])
# def game(gameID):
#     _game = games.find_one({"_id" : gameID})
#     return jsonify( **_game )

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8080))
    host = os.getenv('IP', '0.0.0.0')
    app.run(port=port, host=host)


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