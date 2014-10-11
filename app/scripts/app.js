'use strict';

ABC.App = Backbone.Marionette.Application.extend({

  initialize: function () {

    this.hoodie = new Hoodie('http://localhost:6001');

    /*
    this.user = new ABC.Models.User({
      name: 'Jean Jacques',
      email: 'jj@genitals.com',
      username: 'jjgenitals',
      image: '',
      points: 0,

      homeAddress: '21 rue du sergent Blandan, Nancy, France',
      workAddress: '16 place de la Carrère, Nancy, France',

      trips: null
    });
    */

    this.user = new ABC.Models.User();

    this.menu = new ABC.Menu({
      el: '#menu'
    });

    this.layout = new ABC.Layout({
      el: '#layout'
    });

  },

  render: function () {

    this.menu.render();

    this.layout.show(new ABC.Views.Login());

  }

});
