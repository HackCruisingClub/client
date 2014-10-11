'use strict';

ABC.Views.Estimation = Backbone.Marionette.View.extend({

  template: JST.estimation,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});