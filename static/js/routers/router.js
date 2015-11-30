/* global grit, Backbone */

grit.Router = Backbone.Router.extend({
    routes: {
        "game/:gameID" : "startGame"
    },
    initialize: function () {
        console.log("initialized the router")
        
    },
    
    startGame : function (gameID) {
        new grit.Models.Game({ "id": gameID });
        console.log("todo get game with ID: " + gameID)
    }
});
