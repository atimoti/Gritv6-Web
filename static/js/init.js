/*global grit, app, Backbone*/

Backbone.Model.prototype.idAttribute = "_id"; //set the default id attribute to '_id' as opposed to 'id' to align with MongoDB's default 

var grit = grit || {};
var app = app || {};

(function() {
    
    grit = {
        Models: [],
        Views: [],
        Collections: [],
        Templates: [], 
        Routers: []
    };
    
    app = {
        Models: [],
        Views: [],
        Collections: [],
        Templates: [],
        Routers: []
    };
    
    
}) ();