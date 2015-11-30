/*global grit, _, Backbone*/
grit.Views.Grit = Backbone.View.extend({
    defaults: {
        model: grit.Models.Game,
    },
    el: "#main",
    template: _.template($("#gritTemplate").html()),
    
    initialize: function () {
      console.log(this.model.toJSON());
      this.render();
    },
    
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
    
})