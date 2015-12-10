/*global grit, _, Backbone*/
grit.Controller = _.extend({
  game: { },
  
  elMap: { },
    
  initialize: function(game) {
    this.game = game;
    console.log(this)
  },
  
  //MAP views with their associated Backbone Objects
  
  mapEl: function(object, el){
    this.elMap[object] = el;
  },
  
  getEl: function(object) {
    console.log(this.elMap[object]);
    return this.elMap[object];
  }
  
}, Backbone.Events);