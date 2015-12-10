/*global grit, _, $, Backbone*/
grit.Models.Game = Backbone.Model.extend({
    
    /*For now, players[0] will be the player, and players[1] will be the opponent*/
    
    
    defaults: {
      players: []
    },
    
    urlRoot: "/game",
    
  initialize: function() {
    console.log("initializing game: ");
    this.listenTo(this, 'sync', this.buildGame);
    }, 
    
  buildGame: function() {
    new grit.Collections.Hand(this.get("players")[0].hand);
    _.each(this.get("players"), function(player){
      new grit.Collections.Board(player.board);
    });
  }
})