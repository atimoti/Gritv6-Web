/*global Backbone*/
app.Deck = Backbone.Collection.extend({
  model: app.Card,
  
  shuffle: function() {},
  dealHand: function() {},
  dealCard: function() {}
})
