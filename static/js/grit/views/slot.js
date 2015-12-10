/*global Backbone, _, grit*/

grit.Views.Slot = Backbone.View.extend({
    
    className: "slot",
    
    initialize: function() {
      this.render();
    },
    
    render: function() {
        grit.Controller.getEl(this.collection.collection).append(this.$el);
    }
})