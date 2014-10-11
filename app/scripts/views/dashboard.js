'use strict';

ABC.Views.Dashboard = Backbone.Marionette.View.extend({

  template: JST.dashboard,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});