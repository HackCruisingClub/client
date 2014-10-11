'use strict';

ABC.Models.Friends = Backbone.Collection.extend({

  fetch: function () {
      return ABC.hoodie.store.findAll('friend');
  }

});
