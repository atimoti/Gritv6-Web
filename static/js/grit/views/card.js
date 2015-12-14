/*global grit, _, Backbone*/
grit.Views.Card = Backbone.View.extend({
  
  tagName: "img",
  className: "card",
    
  initialize: function() {
    console.log("creating card view...");
    this.$el.attr("src", this.model.get("src"));
    this.render();
    this.listenTo(this.model, 'add', this.render);
    this.listenTo(this.model, 'change:selected', this.toggleSelected);
    grit.Controller.mapEl(this.model, this.$el);
  },
    
  toggleSelected: function(model, val, options) {
    val ? this.$el.addClass("highlighted") : this.$el.removeClass("highlighted");
  },
  
  render: function(model, val, options) {
    console.log(this.$el);
    console.log(this.$el.parent());
    this.$el.parent().append(this.$el);
    console.log("tried rendering card view...");
    return this;
  }, 
  
  remove: function(model, val, options) {
    // this.parentEl.remove(this.$el);
    console.log("removed card view...");
    return this;
  }
  
})
