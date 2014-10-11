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

    var times   = _.where(data, function (item) { return item.kind.indexOf('time') > -1; });
    var maxTime = _.max(times, function (item) { return item.value; });

    _.each(data, function (item, kind) {

      self.$el.find('.' + kind + ' .value').html(item.value);
      self.$el.find('.' + kind + ' .unit').html(item.unit);

      if (kind.indexOf('time') > -1) {
        self.$el.find('.' + kind).css({
          width:  100 / maxTime * item.value,
          borderBottom: '2px solid white'
        });
      }

    });

  },

  render: function () {

    var self = this;

    this.$el.html(this.template(ABC.app));

    this.estimation.fetch({ from: 'here', to: 'there' })
      .done(function (data) {

        self.populate(data);

      });

    return this.$el;

  }
});