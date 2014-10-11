'use strict';

ABC.app.module('geo', function() {

  var self = this;

  if (0 && 'geolocation' in navigator) {

    this.currentLocation = function (callback) {

      navigator.geolocation.getCurrentPosition(callback);

    };

  } else {

    /* geolocation IS NOT available */
    this.currentLocation = function (callback) {

      /* return user's home ? */
      callback({
        coords: {
          latitude:  '49.1056959',
          longitude: '6.1921145'
        }
      });

    };

  }

  this.currentLocationAsString = function (callback) {

      self.currentLocation(function (position) {

        callback(position.coords.latitude + ',' + position.coords.longitude);

      });
  };


});