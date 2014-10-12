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

    this.$el.find('li').removeClass('selected');

    var item = $(e.target)
                .closest('[data-view]')
                .addClass('selected');

    $('.transformer').removeClass('is-open');

    var ViewClass = ABC.Views[item.data('view')];

    if (ViewClass) {
      ABC.app.layout.show(new ViewClass());
    }

  }

});
