'use strict';

ABC.Views.Friends = Backbone.Marionette.View.extend({

  template: JST.friends,

  events: {
  },

  initialize: function () {

  },

  populate: function (friends, topusers) {

    var insert = function (user) {
      return [
        '<li class="user">',
          '<img src="http://avatars.io/email/', user.get('email'), '" class="profile-picture">',
          '<span class="list-user-name">', user.niceName(), '</span>',
          '<span class="list-user-points">', user.get('points'), '</span>',
        '</li>'
        ].join('');
    };

    var friendsList = this.$el.find('.friend-list');
    friendsList.html(
      _.map(friends, insert.bind(friendsList)).join('')
    );

    var topList = this.$el.find('.topuser-list');
    topList.html(
      _.map(topusers, insert.bind(topList)).join('')
    );

  },

  render: function () {

    var self = this;

    this.$el.html(this.template(ABC.app));

    (new ABC.Models.Friends()).fetch()
      .done(function (friends) {
        self.populate(friends, []);
      });

    return this.$el;

  }

});