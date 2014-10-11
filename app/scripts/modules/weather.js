'use strict';

ABC.app.module('weather', function() {

  var getWeather = function (location, date) {

    var def = new $.Deferred();

    $.simpleWeather({

      location: location,
      unit:     'c',
      date:     date,

      success: function(weather) {

        def.resolve(weather);

        /*
        html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
        html += '<li class="currently">'+weather.currently+'</li>';
        html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';

        for(var i=0;i<weather.forecast.length;i++) {
          html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
        }

        $("#weather").html(html);
        */
      },

      error: function(error) {

        def.reject(error);

      }
    });

    return def;

  };


  this.data = function (location) {

    var now = new Date();
    var d   = new $.Deferred();

    getWeather(location, moment({hour: 8}))
      .pipe(function(morning){
        getWeather(location, moment({hour: Math.max(17, now.getHours) }))
          .pipe(function(evening){
            d.resolve({
              morning: morning,
              evening: evening
            });
          });
        });

    return d;
  };

});