/*global grit, _, Backbone*/
grit.Views.Grit = Backbone.View.extend({
    defaults: {
        model: grit.Models.Game,
    },
    el: "#main",
    template: _.template($("#gritTemplate").html()),
    
    initialize: function () {
      this.model.fetch();
      this.render();
    },
    
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
    
})