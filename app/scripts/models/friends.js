'use strict';

ABC.Models.Friends = Backbone.Collection.extend({

  model: ABC.Models.User,

  fetch: function () {

    var d = new $.Deferred();

    d.resolve([
      new ABC.Models.User({
        username: 'hellgy',
        name:     'Laurence',
        email:    'laurence@redisdead.net',
        points:   540,
        stats:    { cal: 210, kms: 340, money: 218 }
      }),
      new ABC.Models.User({
        username: 'clawfire',
        name:     'Thibault Milan',
        email:    'hello@thibaultmilan.com',
        points:   125,
        stats:    { cal: 204, kms: 200, money: 104 }
      }),
      new ABC.Models.User({
        username: 'jimmy',
        name:     'Jimmy Fisher',
        email:    'jimmy3wg@gmail.com',
        points:   95,
        stats:    { cal: 104, kms: 90, money: 94 }
      }),
      new ABC.Models.User({
        username: 'tsad',
        name:     'Bastien Remy',
        email:    'plopiplop@lampadaire.com',
        points:   85,
        stats:    { cal: 96, kms: 82, money: 87 }
      }),
    ]);

    return d;

    // return ABC.hoodie.store.findAll('friend');
  }

});
