/*global grit, Backbone*/

grit.Collections.Board = Backbone.Collection.extend({
  defaults: {
    model: grit.Models.Slot,
    id: ""
  },
  
  url: "/slot",
  
  //get current slots
  initialize: function() {
    this.fetch();
  }
  
  
  
})