'use strict';

ABC.Models.Estimation = Backbone.Model.extend({

  url: ABC.base + '/distance',

  fetch: function (params) {

    var d = new $.Deferred();

    console.log(params);

    /////////////

    var timeWithCar  = Math.round(Math.random() * 30, 0);
    var timeWithBike = Math.round(Math.random() * 20, 0);
    var averagespeed = Math.round(Math.random() * 20, 0) + 8;
    var personWeight = ABC.app.user.get('weight') || 80;
    var liters       = timeWithCar / 4;

    /////////////

    var advantage   = ABC.app.module('bike_advantages');
    var advCaloric  = advantage.caloric(averagespeed, personWeight, timeWithCar);
    var advEcologic = advantage.ecologic(liters, ABC.app.user.get('carType') || 'oil');

    /* jshint camelcase: false */

    d.resolve({

      car_kms: {
        value: Math.round(Math.random() * 20, 0),
        unit:  'kms'
      },

      car_time: {
        time: timeWithCar,
        unit: 'min'
      },

      bicycle_kms: {
        value: Math.round(Math.random() * 20, 0),
        unit:  'kms'
      },

      bicycle_time: {
        time: timeWithBike,
        unit: 'min'
      },

      caloric: {
        value: advCaloric,
        unit:  'Kcal'
      },

      ecologic: {
        value: '-' + advEcologic + 'g',
        unit:  'CO2'
      },

      points: {
        value: advantage.points(advCaloric, advEcologic),
        unit:  'Points'
      }

    });

    return d;

  }

});
