/*global grit, Backbone*/
grit.Views.Game = new Backbone.View.extend({
    defaults: {
        "Opponent": grit.Models.Player,
        "Me": grit.Models.Player
        
    },
    
    el: "#main",
    
    initialize: function () {
        //get grit from database
        this.model = grit.Models.Game();
        this.model.fetch();
        
        //localize html references
        this.$opponent = this.$("#opponent");
        this.$home = this.$("#home");
        
        this.getPlayers();
        
    },
    
    getPlayers: function () {
        console.log("didn't get players yet")
    }
})