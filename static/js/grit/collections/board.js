/*global grit, Backbone*/

grit.Collections.Board = Backbone.Collection.extend({
  defaults: {
    model: grit.Models.Slot
  },
  
  
  //get current slots
  initialize: function() {
    console.log("initializing board...");
    console.log(this);
    new grit.Views.Board({model: this});
  }
  
  
  
})