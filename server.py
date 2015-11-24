from flask import (
    Flask,
    abort,
    jsonify,
    render_template,
    request )
import pymongo

connection = pymongo.MongoClient("mongodb://$IP")
db = connection.grit
games = db.games

app = Flask(__name__, static_url_path="")

@app.route('/')
def index():
    _game = games.find_one()
    return render_template('index.html', game = _game)
    
if __name__ == '__main__':
    app.run()