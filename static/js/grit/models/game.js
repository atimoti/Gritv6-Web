/*global grit, _, $, Backbone*/
grit.Models.Game = Backbone.Model.extend({
    
    /*For now, players[0] will be the player, and players[1] will be the opponent*/
    
    defaults: {
      players: []
    },
    
    gameTree: { },
    
    boards: [ ],
    hand: { },
    
    urlRoot: "/game",
    
  initialize: function() {
    console.log("initializing game: ");
    new grit.Controller.initialize(this);
    this.listenTo(this, 'sync', this.buildGame);
    new grit.Views.Game({model: this});
  },
    
  buildGame: function() {
    var that = this;
    _.each(this.get("players"), function(player){
      that.boards.push(new grit.Models.Board(player.board, {id: player.id}));
    });
    
    this.hand  = new grit.Collections.Hand(this.get("players")[0].hand);
  },
}, Backbone.Events)