/* global grit, Backbone */

grit.Router = Backbone.Router.extend({
    routes: {
        "game/:gameID" : "startGame"
    },
    
    startGame : function (gameID){
        console.log("todo get game with ID: " + gameID)
    }
});

new grit.Router()
Backbone.history.start();