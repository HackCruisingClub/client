'use strict';

ABC.Menu = Backbone.Marionette.View.extend({

  template: JST.menu,

  events: {

    'click [data-view]': 'switchPage',
    'click .close' : '_close'

  },

  render: function () {

      return this.$el.html(this.template(ABC.app));

  },

  switchPage: function (e) {

    e.preventDefault();

    var ViewClass = ABC.Views[$(e.target).data('view')];

    ABC.app.layout.show(new ViewClass());

  },
  _open : function(event){
    console.log('open');
    event.preventDefault();
    $('.transformer').toggleClass('is-open');
  },
  _close : function(event){
    console.log('close');
    event.preventDefault();
    $('.transformer').removeClass('is-open');
  }

});
