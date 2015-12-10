/*global grit, Backbone*/
grit.Models.Slot = grit.Models.Card.extend({
    defaults: {
        "playable": true,
        "value": 0,
        "highlighted": false
    },
    
    highlight: function () {
      this.highlighted = true;
    },
    
    unhighlight: function (){
      this.highlighted = false;
    }
})