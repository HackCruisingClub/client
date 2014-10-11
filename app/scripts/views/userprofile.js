'use strict';

ABC.Views.UserProfile = Backbone.Marionette.View.extend({

  template: JST.userprofile,

  events: {

    'click  .edit': 'toggleEdit',
    'touch  .edit': 'toggleEdit'

  },

  initialize: function () {

    var self = this;

    this.editable = !! ABC.app.user.name;

    ABC.app.user.on('change', function () {

      self.render();

    });
  },

  toggleEdit: function () {

    this.editable = ! this.editable;

    if (! this.editable) {

        ABC.app.user.set({

            name:    this.$el.find('[name="name"]').val(),
            email:   this.$el.find('[name="email"]').val(),

            image:   this.$el.find('[name="image"]').val(),

            homeAddress: this.$el.find('[name="homeAddress"]').val(),
            workAddress: this.$el.find('[name="workAddress"]').val(),

        });

    }

    this.render();

  },

  render: function () {

    return this.$el.html(this.template({

      editable: this.editable,

      user: ABC.app.user

    }));

  }

});