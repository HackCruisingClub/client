'use strict';

ABC.app.module('geo', function(){

  var self = this;

  if ('geolocation' in navigator) {

    this.currentLocation = function (callback) {

      navigator.geolocation.getCurrentPosition(callback);

    };

  } else {

    /* geolocation IS NOT available */
    this.currentLocation = function (callback) {

      /* return user's home ? */
      callback('0,0');

    };

  }

  this.currentLocationAsString = function (callback) {

      self.currentLocation(function (position) {

        callback(position.coords.latitude + ',' + position.coords.longitude);

      });
  };


});