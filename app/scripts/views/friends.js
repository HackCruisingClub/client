'use strict';

ABC.Views.Friends = Backbone.Marionette.View.extend({

  template: JST.friends,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});