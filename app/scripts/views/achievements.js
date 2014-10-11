'use strict';

ABC.Views.Achievements = Backbone.Marionette.View.extend({

  template: JST.achievements,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});