'use strict';

ABC.Models.Friends = Backbone.Collection.extend({

  model: ABC.Models.User,

  fetch: function () {

    var d = new $.Deferred();

    d.resolve([
      new ABC.Models.User({
        username: 'clawfire',
        name:     'Thibault Milan',
        email:    'hello@thibaultmilan.com',
        points:   125
      }),
      new ABC.Models.User({
        username: 'hellgy',
        name:     'Laurence',
        email:    'laurence@redisdead.net',
        points:   540
      })
    ]);

    return d;

    // return ABC.hoodie.store.findAll('friend');
  }

});
