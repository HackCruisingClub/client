'use strict';

ABC.App = Backbone.Marionette.Application.extend({

  initialize: function () {

    this.hoodie = new Hoodie('http://localhost:6007/_api');

    this.user = new ABC.User({
      name: 'Jean Jacques',
      email: 'jj@genitals.com',
      username: 'jjgenitals',
      image: '',
      points: 0,

      homeAddress: '21 rue du sergent Blandan, Nancy, France',
      workAddress: '16 place de la Carrère, Nancy, France',

      trips: null
    });

    this.menu = new ABC.Menu({
      el: '#menu'
    });

    this.layout = new ABC.Layout({
      el: '#layout'
    });

  },

  render: function () {

    this.menu.render();

  }

});

//////////////////////

ABC.app = new ABC.App();

ABC.app.render();

