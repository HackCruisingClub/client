'use strict';

ABC.Views.Dashboard = Backbone.Marionette.LayoutView.extend({

  template: JST.dashboard,

  regions: {

    weather: '.dashboard-weather',

    estimation: '.dashboard-estimation',

    stats: '.dashboard-stats',

  },

  render: function () {

    this.$el.html(this.template(ABC.app));

    this.weather.show(new ABC.Views.Weather());

    this.estimation.show(new ABC.Views.Estimation());

    this.stats.show(new ABC.Views.Stats());

    return this.$el;
  }

});