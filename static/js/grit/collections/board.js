/*global grit, Backbone*/

grit.Collections.Board = Backbone.Collection.extend({
  
  slots: [],
  
  //get current slots
  initialize: function(slots) {
    console.log("initializing board...");
    new grit.Views.Board({model: this});
    this.addSlots(slots);
  },
  
  addSlots: function(slots) {
    for(var i = 0; i != 3; ++i){
      this.slots.push(new grit.Collections.Slot(slots, {collection: this}));
    }  
  }
  
})