/* jshint: "camelcase": false */
/* global google */

'use strict';

ABC.Views.Somewhere = Backbone.Marionette.View.extend({

  template: JST.somewhere,

  events: {

  },

  bindPlaceSearch: function () {

    // Create the autocomplete
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$el.find('.place-search').get(0),
      { types: ['geocode']
    });

    // When the user selects an address from the dropdown,
    // populate the address fields in the form.
    google.maps.event.addListener(this.autocomplete, 'place_changed', this.fillInAddress);

  },

  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  geolocate: function () {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function(position) {

        var geolocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.autocomplete.setBounds(new google.maps.LatLngBounds(geolocation, geolocation));

      });
    }

  },

  // Get the place details from the autocomplete object.
  fillInAddress: function () {

    var place = this.autocomplete.getPlace();

    console.log(place);

  },

  render: function () {

    this.$el.html(this.template(ABC.app));

    this.bindPlaceSearch();

    return this.$el;

  }

});