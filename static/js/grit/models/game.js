/*global grit, Backbone*/
grit.Models.Game = Backbone.Model.extend({
    defaults: {
        players: []
    },
    
    urlRoot: "/game",
    
    initialize: function () {
      this.createBoard();
    },
    
    createBoard: function () {
      
    },
    
    getPlayers: function () {
        
    },
    
    getDeck: function () {
        
    }
})