/*global grit, Backbone*/
grit.Models.Game = Backbone.Model.extend({
    defaults: {
        "Deck": grit.Models.Card,
        game: {},
        players: []
    },
    
    urlRoot: "/game",
    
    initialize: function () {
        this.game = this.fetch();
        this.players = this.game.players;
        
    },
    
    getPlayers: function () {
        
    },
    
    getDeck: function () {
        
    }
})