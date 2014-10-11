'use strict';

ABC.User = Backbone.Model.extend({

  url: '',

  defaults: {
    name: '',
    email: '',
    username: '',
    image: '',
    points: 0,

    homeAddress: '',
    workAddress: '',

    trips: null
  },

  initialize: function () {


  },

  niceName: function () {

    var name = this.get('name');

    return name.substr(0, 1).toUpperCase() + name.substr(1);

  },

  login: function (login, password) {

    ABC.app.hoodie.account.signUp(login, password);

    this.username = ABC.app.hoodie.account.username;

  },

  logout: function () {

    ABC.app.hoodie.account.signOut();

  }

});
