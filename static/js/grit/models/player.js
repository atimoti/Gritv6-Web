/*global grit, Backbone*/
grit.Models.Player = Backbone.Model.extend({
    selectCard: function (Card) {
       Card.highlight();
    },
    
    deselectCard: function (Card) {
       Card.unhighlight();
    }
})