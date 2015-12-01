from flask import (
    Flask,
    abort,
    jsonify,
    render_template,
    request )
from mongoengine import connect
import pymongo
import json
import os
import dealer

app = Flask(__name__.split('.')[0], static_url_path='')

MONGOLAB_URI = os.getenv('MONGOLAB_URI')
if MONGOLAB_URI == None:
    print("NONE")
    app.debug = True
    connection = pymongo.MongoClient("mongodb://greyhat9-grit6-2187734/data/db")
else:
    print(MONGOLAB_URI)
    connection = pymongo.MongoClient(MONGOLAB_URI)
    host = "http://gritv6.herokuapp.com/"
    
db = connection.grit

deck = db.deck
deck.remove()
deck.insert_one({ "_id":0, "spades":['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS'], "hearts":['AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H'] })

games = db.games
games.remove()
games.insert_one({ "_id":1, "players": [ {"_id": "rich"}, {"_id": "anthony"} ] })

@app.route('/')
def renderIndex():
    return render_template('index.html')
    
@app.route('/game/<int:gameID>', methods=['GET', 'POST'])
def getGame(gameID):
    
    thisDeck = deck.find_one({"_id":0})
    cards = dealer.shuffle(thisDeck)
    hands = dealer.deal(cards)
    
    #update the two players with the new cards
    games.update_one({"_id": gameID}, {'$set': {"players.0.hand": hands[0], "players.0.board": dealer.dealCard(cards)}})
    games.update_one({"_id": gameID}, {'$set': {"players.1.hand": hands[1], "players.1.board": dealer.dealCard(cards)}})
    
    _game = games.find_one({"_id": gameID})
    return jsonify( **_game )

if __name__ == '__main__':
    host = os.getenv('IP', '127.0.0.1')
    port = int(os.getenv('PORT', 8000))
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