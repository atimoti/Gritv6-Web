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
  
  toggleSelected: function() {
    if(this.model.get("selected")){
    console.log("toggleSelected");
      this.$el.addClass("highlighted");
    } else{
      this.$el.removeClass("highlighted");
    }
  },
  
  render: function() {
    $(".hand").append(this.$el);
    console.log("rendered card view...");
    return this;
  }, 
  
  remove: function() {
    $(".hand").remove(this.$el);
    console.log("removed card view...");
    return this;
  }
  
})
