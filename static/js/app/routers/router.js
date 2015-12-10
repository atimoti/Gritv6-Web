/* global app, grit, Backbone */

app.Routers.Router = Backbone.Router.extend({
    routes: {
      "game/:gameID" : "startGame"
    },
    
    initialize: function () {
      console.log("initialized the router");
        
    },
    
    //loads the game given the gameID number, happens once
    startGame: function (gameID) {
      console.log("Starting game with id: "+ gameID);
      
      var game = new grit.Models.Game({"_id": gameID});
      console.log("fetching game...");
      game.fetch();
      console.log("fetched game...");
    }
    
});

new app.Routers.Router();
Backbone.history.start( 
    // {pushState: true} 
    );