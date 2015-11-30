/*global grit, Backbone*/

Backbone.Model.prototype.idAttribute = "_id"; //allow Backbone to accpet MongoDB's '_id' attribute as opposed to Backbone's default 'id'
var grit = grit || {};
var settings = settings || {};

(function() {
    
    grit = {
        Models: {},
        Views: {},
        Collections: {},
        Templates: {}
    };
    
    settings = {
        Models: {},
        Views: {},
        Collections: {},
        Templates: {}
    };
    
    
}) ();