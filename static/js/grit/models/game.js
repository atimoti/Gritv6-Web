/*global grit, Backbone*/
grit.Models.Game = Backbone.Model.extend({
    defaults: {
        "Deck": grit.Models.Card,
        game: {},
        players: []
    },
    
    urlRoot: "/game",
    
    initialize: function () {
        // this.game = this.fetch(); already being done in the view
        this.players = this.game.players;
        
    },
    
    getPlayers: function () {
        
    },
    
    getDeck: function () {
        
    }
})