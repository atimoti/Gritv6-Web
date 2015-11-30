/* global app, grit, Backbone */

app.Routers.Router = Backbone.Router.extend({
    routes: {
        "game/:gameID" : "startGame"
    },
    initialize: function () {
        console.log("initialized the router");
        
    },
    
    startGame : function (gameID) {
        var game = new grit.Models.Game({ "id": gameID });
        new grit.Views.Grit( {model: game} );
        console.log("todo get game with ID: " + gameID);
    }
});

new app.Routers.Router();
Backbone.history.start( 
    // {pushState: true} 
    );