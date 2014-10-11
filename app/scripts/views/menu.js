'use strict';

ABC.Menu = Backbone.Marionette.View.extend({

  template: JST.menu,

  events: {

    'click [data-view]': 'switchPage'
  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  },

  switchPage: function (e) {

    e.preventDefault();

    $('.transformer').removeClass('is-open');

    var ViewClass = ABC.Views[$(e.target).data('view')];

    ABC.app.layout.show(new ViewClass());

  }

});
