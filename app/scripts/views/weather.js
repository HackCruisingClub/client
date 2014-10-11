'use strict';

ABC.Views.Weather = Backbone.Marionette.View.extend({

  template: JST.weather,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});