/* global grit, Backbone */

grit.Router = new Backbone.Router.extend({
    routes: {
        "game/:gameID" : "startGame"
    },
    
    startGame : function (gameID){
        console.log("todo get game with ID: " + gameID)
    }
});

Backbone.history.start();