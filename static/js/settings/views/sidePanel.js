/*global settings, _, Backbone*/
settings.Views.SidePanel = Backbone.View.extend({
    defaults: {
        model: settings.Models.Player,
        user: {"id":0, "rating":1200}
    },
    el: "#sidePanel",
    template: _.template($("#sidePanelTemplate").html()),
    
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
    
})