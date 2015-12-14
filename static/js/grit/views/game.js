/*global grit, _, Backbone */

grit.Views.Game = Backbone.View.extend({
  
  el: "#main",
  
  events: {
    "click .slot" : "clickSlot",
    "click .hand img.card" : "selectCard"
  },
  
  initialize: function() {
    console.log(this.$el);
    this.listenTo(this.model, "clickSlot", this.clickSlot);
  },
  
  clickSlot: function(model, val, options) {
    console.log("clickSlot triggered...");
    console.log(model);
    
    if(model.topCard === this.model.hand.selectedCard) {
      
    }
  },
  
  selectCard: function(event) {
    console.log("selectCard triggered...");
    console.log(event);
    console.log(event.toElement);
    var model = grit.Controller.getModel(event.toElement);
    console.log(model);
    this.model.hand.setSelected(model);
  },
  
  render: function() {
    this.$el.html();
    return this;
  }
  
});