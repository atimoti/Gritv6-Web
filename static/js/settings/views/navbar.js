/*global settings, _, Backbone*/
settings.Views.Navbar = Backbone.View.extend({
    defaults: {
        model: settings.Models.Navbar,
        navObjs: []
    },
    el: "#navbar",
    template: _.template($("#navbarTemplate").html()),
    
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
    
})