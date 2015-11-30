/*global app, _, Backbone*/
app.Views.Navbar = Backbone.View.extend({
    defaults: {
        model: app.Models.Navbar,
        navObjs: []
    },
    el: "#navbar",
    template: _.template($("#navbarTemplate").html()),
    
    
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
    
})