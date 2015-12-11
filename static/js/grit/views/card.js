/*global grit, _, Backbone*/
grit.Views.Card = Backbone.View.extend({
  
  tagName: "img",
  className: "card",
    
  events: {
    "click" : "click" 
  },
    
  click: function() {
    console.log("click registered");
    console.log("the "+this.model.get("card")+" was clicked");
    this.model.trigger("clickCard", this.model);
  },
  
  initialize: function() {
    console.log("creating card view...");
    this.$el.attr("src", this.model.get("src"));
    this.render();
    this.listenTo(this.model, 'add', this.render);
    this.listenTo(this.model, 'change:selected', this.toggleSelected);
  },
    
  toggleSelected: function(model, val, options) {
    val ? this.$el.addClass("highlighted") : this.$el.removeClass("highlighted");
  },
  
  render: function(model, val, options) {
    grit.Controller.trigger("renderCard", this.model);
    grit.Controller.getEl(this.model.collection).append(this.$el);
    console.log("tried rendering card view...");
    return this;
  }, 
  
  remove: function(model, val, options) {
    // this.parentEl.remove(this.$el);
    console.log("removed card view...");
    return this;
  }
  
})
