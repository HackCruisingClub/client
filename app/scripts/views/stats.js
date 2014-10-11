'use strict';

ABC.Views.Stats = Backbone.Marionette.View.extend({

  template: JST.stats,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});