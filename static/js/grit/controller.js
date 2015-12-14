/*global grit, _, Backbone*/
grit.Controller = _.extend({
  game: { },
  
  elMap: { },
  modelMap: { },
    
  initialize: function(game) {
    this.game = game;
    console.log(this)
  },
  
  //MAP views with their associated Backbone Objects
  
  mapEl: function(object, el){
    if(this.elMap[object] !== undefined){
      this.elMap[object].push(el);
    } else {
      this.elMap[object] = el;
    }
    this.modelMap[el] = object;
  },
  
  getEl: function(object) {
    console.log(this.elMap[object]);
    return this.elMap[object];
  }, 
  
  getModel: function(el) {
    return this.modelMap[el];
  }
  
}, Backbone.Events);