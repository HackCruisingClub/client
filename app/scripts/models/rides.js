'use strict';

ABC.Models.Rides = Backbone.Collection.extend({

  url: ABC.base + '/rides',

  favorites: function () {
      return ABC.hoodie.store.findAll('ride');
  }

});
