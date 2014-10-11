'use strict';

ABC.Views.UserProfile = Backbone.Marionette.View.extend({

  template: JST.userprofile,

  events: {

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  }

});