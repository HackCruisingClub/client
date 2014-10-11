'use strict';

ABC.Views.Stats = Backbone.Marionette.View.extend({

  template: JST.stats,

  events: {

  },

  initialize: function () {

    this.estimation = new ABC.Models.Estimation();

    this.stats = new ABC.Models.Stats();

  },

  populate: function (data) {

    var self = this;

    this.$el.find('.duration').html(
      'depuis ' + data.totalDays + (data.totalDays > 1 ? ' jours' : ' jour')
    );

    var max = _.max(data, function (item) { return item.time; });

    _.each(data, function (item, name) {

      self.$el.find('.' + name).css('width', 100 / max * item.time);
      self.$el.find('.' + name + ' .value').html(item.value);
      self.$el.find('.' + name + ' .unit').html(item.unit);

    });

  },

  render: function () {

    var self = this;

    this.stats.fetch().done(function (data) {

      self.populate(data);

    });

    return this.$el.html(this.template(ABC.app));

  }

});