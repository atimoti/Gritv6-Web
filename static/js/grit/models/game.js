/*global grit, Backbone*/
grit.Models.Game = Backbone.Model.extend({
    defaults: {
        "Deck": grit.Models.Card,
        game: {},
        players: []
    },
    
    urlRoot: "/game",
    
    // convert the schema used on the backend to what will be used on the frontend (as of now, do nothing)
    initialize: function () {
        this.fetch();
    },
    
    getPlayers: function () {
        
    },
    
    getDeck: function () {
        
    }
})