'use strict';

ABC.Views.Weather = Backbone.Marionette.View.extend({

  template: JST.weather,

  events: {

  },

  initialize: function () {

  },

  populate: function (data) {

    var self = this;

    _.each(data, function (data, daypart) {

      var parent = self.$el.find('.' + daypart);

      parent.find('.icon').attr('src', data.image);

      parent.find('.temperature').html(data.temp + '°');

      parent.find('.humidity').html(data.humidity + '%');

      parent.find('.wind').html(parseInt(data.wind.speed / 1000 * 60, 0) + ' m/s');

    });

  },

  render: function () {

    var self = this;

    this.$el.html(this.template(ABC.app));

    ABC.app.module('geo').currentLocationAsString(function (location) {

      ABC.app.module('weather').data(location)

        .done(function (data) {
          self.populate(data);
        })

        .fail(function () {
          console.log('shit happened');
        });

    });

    return this.$el;

  }

});