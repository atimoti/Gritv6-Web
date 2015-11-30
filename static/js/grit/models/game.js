/*global grit, Backbone*/
grit.Models.Game = Backbone.Model.extend({
    defaults: {
        "Deck": grit.Models.Card,
        game: {},
        players: []
    },
    
    urlRoot: "/game",
    
    // convert the schema used on the backend to what will be used on the frontend
    initialize: function () {
        this.game = this.fetch().toJSON();
        this.players = this.game.players;
        
    },
    
    getPlayers: function () {
        
    },
    
    getDeck: function () {
        
    }
})