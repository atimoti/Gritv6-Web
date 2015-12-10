/*global grit, _, Backbone*/
grit.Collections.Hand = Backbone.Collection.extend({
  
  selectedCard: null,
  model: grit.Models.Card,

  initialize: function() {
    console.log("initializing hand...");
    //listen to events
    this.listenTo(this, "clickCard", this.setSelected);
    //create view
    new grit.Views.Hand({collection: this});
  },
  
  setSelected: function(model, val, options){
    console.log("event triggered...");
    if(this.selectedCard !== null && this.selectedCard !== model){
      this.selectedCard.set("selected", false);
    }
    model.set("selected", !model.get("selected"));
    this.selectedCard = model;
  }
})
