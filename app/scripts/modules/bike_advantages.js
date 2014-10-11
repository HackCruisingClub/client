'use strict';

ABC.app.module('bike_advantages', function() {

  var avgspeedToCoef = [
    0.0020, //  7
    0.0100, //  9
    0.0180, // 10
    0.0250, // 11
    0.0330, // 12
    0.0428, // 13
    0.0550, // 14
    0.0688, // 15
    0.0778, // 16
    0.0820, // 17
    0.0872, // 18
    0.0920, // 19
    0.0977, // 20
    0.1000, // 21
    0.1096, // 22
    0.1156, // 23
    0.1229, // 24
    0.1301, // 25
    0.1377, // 26
    0.1459, // 27
    0.1344, // 28
    0.1635, // 29
    0.1731, // 30
    0.1833, // 31
    0.1941, // 32
    0.2056, // 33
    0.2177, // 34
    0.2305, // 35
    0.2440, // 36
    0.2584, // 37
    0.2736, // 38
    0.2897, // 39
    0.3068, // 40
  ];

  this.caloric = function (avgspeed, personWeight, minutes) {

    var avgspeedIndex = Math.min(40, Math.max(avgspeed, 7)) - 7;

    return minutes * avgspeedToCoef[avgspeedIndex] * personWeight;

  };

  this.ecologic = function (liters, type) {

    return liters * (type === 'oil' ? 2.28 : 2.6); /* oil =/= diesel */

  };

  this.points = function (caloric, ecologic) {

    return 5 * (caloric + ecologic) / 2;

  };


});