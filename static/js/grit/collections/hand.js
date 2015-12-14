/*global grit, _, Backbone*/
grit.Collections.Hand = Backbone.Collection.extend({
  
  model: grit.Models.Card,
  selectedCard: null,
  
  initialize: function() {
    console.log("initializing hand...");
    //create view
    new grit.Views.Hand({collection: this});
  }, 
  
  setSelected: function(model, val, options){
    console.log("event triggered...");
    if(this.selectedCard !== null && this.selectedCard !== model && this.selectedCard !== undefined){
      this.selectedCard.set("selected", false);
    }
    model.set("selected", !model.get("selected"));
    this.selectedCard = model;
  }
  
})
