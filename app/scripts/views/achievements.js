'use strict';

ABC.Views.Achievements = Backbone.Marionette.LayoutView.extend({

  template: JST.achievements,

  regions: {

    estimation: '.achievements-estimation',

    stats: '.achievements-stats',

  },

  render: function () {

    this.$el.html(this.template(ABC.app));

    this.stats.show(new ABC.Views.Stats());
    this.estimation.show(new ABC.Views.Estimation());

    return this.$el;
  }

});