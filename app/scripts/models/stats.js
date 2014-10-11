'use strict';

ABC.Models.Stats = Backbone.Model.extend({

  url: ABC.base + '/stats',

  mine: function () {
      return ABC.hoodie.store.find('stats', 0);
  }

});
