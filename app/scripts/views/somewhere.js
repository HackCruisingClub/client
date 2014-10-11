'use strict';

ABC.Views.Somewhere = Backbone.Marionette.View.extend({

  template: JST.somewhere,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});