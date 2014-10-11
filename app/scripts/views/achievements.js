'use strict';

ABC.Views.Achievements = Backbone.Marionette.LayoutView.extend({

  template: JST.achievements,

  regions: {

    weather: '.achievements-weather',

    estimation: '.achievements-estimation',

    stats: '.achievements-stats',

  },

  render: function () {

    this.$el.html(this.template(ABC.app));

    this.weather.show(new ABC.Views.Weather());

    this.estimation.show(new ABC.Views.Estimation());

    this.stats.show(new ABC.Views.Stats());

    return this.$el;
  }

});