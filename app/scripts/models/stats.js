'use strict';

ABC.Models.Stats = Backbone.Model.extend({

  url: ABC.base + '/stats',

  fetch: function () {
      return ABC.app.hoodie.store.find('stats', 0);
  }

});
