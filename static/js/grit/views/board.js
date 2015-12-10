/*global Backbone, _, grit*/

grit.Views.Board = Backbone.View.extend({
    className: "board",
    initialize: function() {
        console.log("creating the board view...");
        grit.Controller.mapEl(this.collection, this.$el);
        this.render();
    },
    
    render: function() {
        $("#main").append(this.$el);
    }
})