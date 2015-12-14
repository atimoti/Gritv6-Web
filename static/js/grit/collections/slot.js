/*global grit, _, Backbone*/
grit.Collections.Slot = Backbone.Collection.extend({
    model: grit.Models.Card,
    defaults: {
      "playable": true,
      "highlighted": false,
      "topCard": null
    },
    
    initialize: function() {
      this.listenTo()
      new grit.Views.Slot({collection: this});
    }
})