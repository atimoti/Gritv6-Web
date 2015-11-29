/*global grit, Backbone*/
grit.Models.Game = new Backbone.Model.extend({
    defaults: {
        "Deck": grit.Models.Card,
        Players: []
    },
    
    url: "../server.py",
    
    initialize: function () {
        this.game = this.fetch();
        console.log(this.game);
    },
    
    getPlayers: function () {
        
    },
    
    getDeck: function () {
        
    }
})