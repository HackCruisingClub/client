'use strict';

ABC.Views.Login = Backbone.Marionette.View.extend({

  template: JST.login,

  events: {

    'click  .submit': 'login'

  },

  initialize: function () {

    ABC.app.hoodie.account.on('signin', this.onLogin);
    ABC.app.hoodie.account.on('signup', this.onLogin);
    ABC.app.hoodie.account.on('authenticated', this.onLogin);
    ABC.app.hoodie.account.on('unauthenticated', this.onLogout);

  },

  onLogin: function (user) {

    ABC.app.user.load(JSON.parse(JSON.stringify(user)));

    ABC.app.layout.show(new ABC.Views.UserProfile());

  },

  onLogout: function () {

    ABC.app.user.set({ });

    ABC.app.layout.show(new ABC.Views.Login());

  },

  render: function () {

    return this.$el.html(this.template(ABC.app));

  },

  onShow: function () {

    if (this.isLoggedIn()) {

      this.onLogin(ABC.app.hoodie.account);

    }

  },

  login: function (e) {

    e.preventDefault();

    var login    = this.$el.find('[name="username"]').val();
    var password = this.$el.find('[name="password"]').val();

    ABC.app.hoodie.account.signUp(login, password);

  },

  logout: function () {

    ABC.app.hoodie.account.signOut();

  },

  isLoggedIn: function () {

    return ABC.app.hoodie.account.username !== null;

  }

});