/*global grit, Backbone*/
grit.Models.Game = Backbone.Model.extend({
    defaults: {
        "Deck": grit.Models.Card,
        Players: []
    },
    
    urlRoot: "game/",
    
    initialize: function () {
        this.game = this.fetch();
        console.log(this.game);
    },
    
    getPlayers: function () {
        
    },
    
    getDeck: function () {
        
    }
})