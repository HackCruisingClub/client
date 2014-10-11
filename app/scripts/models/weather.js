'use strict';

ABC.Models.Weather = Backbone.Model.extend({

  url: function() {

    return ABC.base + '/weather?at=' + ABC.currentLocationAsString();

  }

});
