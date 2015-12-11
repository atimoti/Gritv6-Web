/*global grit, Backbone*/

grit.Models.Board = Backbone.Model.extend({
  
  //get current slots
  initialize: function(s) {
    console.log("initializing board...");
    console.log(this);
    new grit.Views.Board({model: this});
    this.buildSlots();
  },
  
  buildSlots: function(slots) {
    console.log(this.models);
    for(var i = 0; i!=3; ++i){
      new grit.Collections.Slot(this.get(i));
    }
  }
  
})