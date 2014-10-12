'use strict';

ABC.Models.User = Backbone.Model.extend({

  url: '',

  defaults: {
    name:     'Annonyme',
    email:    '',
    username: '',
    image:    '',
    points:   0,

    homeAddress: '',
    workAddress: '',

    trips: null
  },

  initialize: function () {

    this.on('change', this.onChange);

  },

  load: function (hoodieData) {

    var self = this;

    return ABC.app.hoodie
      .store.findAll()
        .done(function (objects) {

          if (objects.length) {

            for (var i = objects.length - 1; i >= 0; i--) {
              if (objects[i].type === 'userdata') {
                self.set({

                  name:        objects[i].name,
                  email:       objects[i].email,
                  username:    hoodieData.username,
                  image:       objects[i].image,
                  points:      0,

                  homeAddress: objects[i].homeAddress,
                  workAddress: objects[i].workAddress,

                  userDataId:  objects[i].id,

                });
                break;
              }
            }

          } else {

            self.onCreate().done(function (data) {
              self.set('userDataId', data.id);
            });

          }

        });

  },

  onChange: function (model) {

    if (model._previousAttributes.username) {

      return ABC.app.hoodie.store.update('userdata', this.get('userDataId'), this.toJSON());

    }

    ABC.app.menu.render();

  },

  onCreate: function () {

    return ABC.app.hoodie.store.add('userdata', this.toJSON());

  },

  niceName: function () {

    var name = this.get('name');

    return name ? name.substr(0, 1).toUpperCase() + name.substr(1) : this.get('username');

  },

  niceCarType: function () {

    return this.get('carType') === 'oil' ? 'Essence' : 'Diesel';

  }

});
