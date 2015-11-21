/*global Backbone*/
app.Card = Backbone.Model.extend({
  defaults: {
    "value": 0,
    "suit": "",
    "facedown": true
  }
})
