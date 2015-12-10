/*global Backbone, _, grit*/
grit.Models.Player = Backbone.Model.extend({
  
  defaults: {
    board: [], 
    hand: []
  },
  
  initialize: function(player) {
    console.log(player);
    console.log(this);
  }
})