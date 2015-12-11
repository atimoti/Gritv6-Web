/*global grit, _, Backbone*/
grit.Collections.Slot = Backbone.Collection.extend({
    defaults: {
      "playable": true,
      "highlighted": false,
      "topCard": null
    },
    
    initialize: function() {
      new grit.Views.Slot({collection: this});
      this.listenTo(this, 'add', this.setTopCard);
    }
    
    // playCard: function(card) {
    //   var that = this;
    //   that.cards.push(card);
    // },
    
    // setTopCard: function(model, val, options) {
    //   this.set("topCard", model);
    // },
    
    // highlight: function () {
    //   this.highlighted = true;
    // },
    
    // unhighlight: function (){
    //   this.highlighted = false;
    // }
})