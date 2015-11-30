/* global grit, Backbone */

grit.Router = Backbone.Router.extend({
    routes: {
        "game/:gameID" : "startGame"
    },
    
    startGame : function (gameID){
	  	grit.Models.Game.url = '{{ url_for( "game" ) }}'
        console.log("todo get game with ID: " + gameID)
    }
});

new grit.Router();
Backbone.history.start();