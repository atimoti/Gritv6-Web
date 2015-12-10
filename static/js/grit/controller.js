/*global grit, _, Backbone*/
grit.Controller = _.extend({
  game: { },
    
  initialize: function(game){
    this.game = game;
  }
}, Backbone.Events);