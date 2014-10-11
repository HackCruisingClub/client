'use strict';

ABC.Models.Estimation = Backbone.Model.extend({

  url: ABC.base + '/distance',

  fetch: function (params) {

    console.log(params);

    var d = new $.Deferred();

    d.resolve({

      car: {
        kms:  Math.round(Math.random() * 30, 0),
        time: Math.round(Math.random() * 30, 0),
      },

      bicycle: {
        kms:  Math.round(Math.random() * 20, 0),
        time: Math.round(Math.random() * 20, 0),
      }

    });

    return d;

  }

});
