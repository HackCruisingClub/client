/**
 * Created by bremy on 12/10/2014.
 */
'use strict';

ABC.Views.Park = Backbone.Marionette.View.extend({

    template: JST.park,

    render: function () {

        this.$el.html(this.template());

        return this.$el;
    }
});