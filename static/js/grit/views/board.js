/*global Backbone, _, grit*/

grit.Views.Board = Backbone.View.extend({
    className: "board",
    initialize: function() {
        console.log("creating the board view...");
        this.render();
    },
    
    render: function() {
        $("#main").append(this.$el);
    }
})