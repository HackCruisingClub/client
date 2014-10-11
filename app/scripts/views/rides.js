'use strict';

ABC.Views.Rides = Backbone.Marionette.View.extend({

  template: JST.rides,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});