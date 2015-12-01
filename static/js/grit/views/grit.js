/*global grit, _, Backbone*/
grit.Views.Grit = Backbone.View.extend({
    el: "#main",
    template: _.template($("#gritTemplate").html()),
    
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },
    
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
    
})