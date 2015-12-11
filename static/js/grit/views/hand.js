/*global grit, _, Backbone */
grit.Views.Hand = Backbone.View.extend({
  
  className: 'hand',

  initialize: function() {
    console.log("creating the hand's view...");
    grit.Controller.mapEl(this.collection, this.$el);
    this.render();
  },
  
  render: function() {
    $("#main").append(this.$el);
    console.log("hand view rendered...");
  }
})