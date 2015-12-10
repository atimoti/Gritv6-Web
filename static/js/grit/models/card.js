/*global grit, Backbone*/
grit.Models.Card = Backbone.Model.extend({
  
  defaults: {
    "card": "",
    "value": 0,
    "suit": "",
    "facedown": true,
    "order": 0,
    "imgRoot": "/Grit_Cards/",
    "selected": false
  },
  
  //Start inititalization
  initialize: function(card) {
    console.log("initializing card..."+card);
    this.extrapolate(card);
    
    new grit.Views.Card({model: this});
  },
  
  extrapolate: function(card) {
    this.set("card", card);
    this.set("src", this.get("imgRoot")+this.get("card")+".svg");
    this.set("suit", card.charAt(card.length-1));
    var rank = card.substr(0, card.length-1);
    this.set("value", (rank === 'J' ? 10 : rank) );
  },
  //End initialization
})
