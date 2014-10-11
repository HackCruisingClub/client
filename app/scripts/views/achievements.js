'use strict';

ABC.Views.Achievements = Backbone.Marionette.View.extend({

  template: JST.achievements,

  render: function () {

    this.$el.html(this.template(ABC.app));

    return this.$el;
  }

});