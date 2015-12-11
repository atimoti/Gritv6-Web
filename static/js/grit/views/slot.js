/*global Backbone, _, grit*/

grit.Views.Slot = Backbone.View.extend({
    
    className: "slot",
    
    initialize: function() {
      grit.Controller.mapEl(this.collection, this.$el);
      this.render();
    },
    
    render: function() {
        grit.Controller.getEl(this.collection.collection).append(this.$el);
    }
})