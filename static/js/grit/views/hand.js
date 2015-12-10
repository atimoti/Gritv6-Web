/*global grit, _, Backbone */
grit.Views.Hand = Backbone.View.extend({
  
  className: 'hand',

  initialize: function() {
    console.log("creating the hand's view...");
    this.render();
  },
  
  render: function() {
    $("#main").append(this.$el);
    console.log("hand view rendered...");
  }
})