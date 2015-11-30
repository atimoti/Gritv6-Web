/*global grit, _, Backbone*/
grit.Views.Grit = Backbone.View.extend({
    defaults: {
        model: grit.Models.Game,
        game: {}
    },
    el: "#main",
    template: _.template($("#gritTemplate").html()),
    
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
    
})