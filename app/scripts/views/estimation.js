'use strict';

ABC.Views.Estimation = Backbone.Marionette.View.extend({

  template: JST.estimation,

  events: {

  },

  initialize: function () {

    this.estimation = new ABC.Models.Estimation();

    this.stats = new ABC.Models.Stats();

  },

  populate: function (data) {

    var self = this;

    this.$el.find('.ridelabel').html('maison > bureau');

    _.each(data, function (item, kind) {

      self.$el.find('.' + kind + ' .value').html(item.value);
      self.$el.find('.' + kind + ' .unit').html(item.unit);

    });

  },

  render: function () {

    var self = this;

    this.estimation.fetch({ from: 'here', to: 'there' })
      .done(function (data) {

        self.populate(data);

      });

    return this.$el.html(this.template(ABC.app));

  }
});