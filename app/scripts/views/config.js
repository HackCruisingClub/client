'use strict';

ABC.Views.Config = Backbone.Marionette.View.extend({

  template: JST.config,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});