this["JST"] = this["JST"] || {};

this["JST"]["achievements"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-achievements">\n\n  <div class="hellgy-hero">\n    <h2>Mes trophées</h2>\n  </div>\n\n  ';
 _.each(achievements, function(a) { ;
__p += '\n  <div class="achievement">\n    <div class="hexagon"></div>\n    <span class="achievement-label">' +
((__t = ( a.name )) == null ? '' : __t) +
'</span>\n  </div>\n  ';
 }) ;
__p += '\n\n</div>';

}
return __p
};

this["JST"]["config"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-config">\n\n    <h2>Paramètres</h2>\n\n    <p>Lorem ipsum</p>\n\n</div>';

}
return __p
};

this["JST"]["dashboard"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-dashboard">\n\n  <div class="dashboard-weather"></div>\n\n  <div class="dashboard-estimation"></div>\n\n  <div class="dashboard-stats"></div>\n\n</div>\n';

}
return __p
};

this["JST"]["estimation"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="estimation">\n\n    <div class="ridelabel">maison<i class="fa fa-chevron-right"></i>bureau</div>\n\n    <div class="bicycle_kms">\n        <span class="value"></span><span class="unit"></span>\n    </div>\n\n    <div class="car_time">\n        <i class="fa fa-car"></i>\n        <time class="value"></time><span class="unit"></span>\n    </div>\n\n    <div class="bicycle_time">\n        <i class="fa fa-bicycle"></i>\n        <time class="value"></time><span class="unit"></span>\n    </div>\n\n    <div class="advantages">\n\n        <div class="label">à bicyclette</div>\n\n        <div class="caloric">\n            <i class="fa fa-car"></i>\n            <span class="value"></span>\n            <label class="unit"></label>\n        </div>\n        <div class="ecologic">\n            <span class="value"></span>\n            <label class="unit"></label>\n        </div>\n        <div class="points">\n            <span class="value"></span>\n            <label class="unit"></label>\n        </div>\n    </div>\n\n</div>\n';

}
return __p
};

this["JST"]["friends"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-friends">\n\n  <div class="hellgy-hero">\n    <h2>Mes amis</h2>\n    <h3>Voir le classement de cette semaine</h3>\n    <button class="callto-action">Ajouter des amis facebook</button>\n  </div>\n\n  <ul class="friend-list">\n  </ul>\n\n</div>';

}
return __p
};

this["JST"]["login"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="login">\n\n    <input type="text" name="username" />\n\n    <input type="password" name="password" />\n\n    <button class="submit">Se connecter</button>\n\n</div>';

}
return __p
};

this["JST"]["menu"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav>\n  <div id="profile" >\n    <a data-view="UserProfile">\n      <img src="http://avatars.io/email/' +
((__t = ( user.get('email') )) == null ? '' : __t) +
'?size=medium" alt="" class="profile-picture">' +
((__t = ( user.niceName() || 'Anonyme' )) == null ? '' : __t) +
'\n    </a>\n  </div>\n  <ul id="menu-list">\n    <li class="menu-link" data-view="Dashboard">\n      <a>\n        <i class="icon-iconmonstr-home-3-icon"></i> Dashboard\n      </a>\n    </li>\n    <li class="menu-link" data-view="Park">\n      <a>\n        <i class=""></i> Parkings &amp; location\n      </a>\n    </li>\n    <li class="menu-link" data-view="Somewhere">\n      <a>\n        <i class="icon-iconmonstr-direction-7-icon"></i> Aller à\n      </a>\n    </li>\n    <li class="menu-link" data-view="Rides">\n      <a>\n        <i class="icon-iconmonstr-map-2-icon"></i> Points d\'intérêts\n      </a>\n    </li>\n    <li class="menu-link" data-view="Achievements">\n      <a>\n        <i class="icon-iconmonstr-trophy-12-icon"></i> Trophées\n      </a>\n    </li>\n    <li class="menu-link" data-view="Partners">\n      <a>\n        <i class="icon-iconmonstr-christmas-gift-icon"></i> Réductions\n      </a>\n    </li>\n    <li class="menu-link" data-view="Friends">\n      <a>\n        <i class="icon-iconmonstr-user-13-icon"></i> Copains\n      </a>\n    </li>\n    <!--\n    <li class="menu-link" data-view="Config">\n      <a>\n        <i class="icon-iconmonstr-gear-icon"></i> Paramètres\n      </a>\n    </li>\n    -->\n  </ul>\n</nav>\n';

}
return __p
};

this["JST"]["park"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-park">\n\n    <div class="hellgy-hero">\n        <h2>Parkings</h2>\n    </div>\n\n    <link href=\'https://api.tiles.mapbox.com/mapbox.js/v2.1.2/mapbox.css\' rel=\'stylesheet\' />\n    <script src=\'https://code.jquery.com/jquery-1.11.0.min.js\'></script>\n    <script src=\'https://api.tiles.mapbox.com/mapbox.js/v2.1.2/mapbox.js\'></script>\n\n\n    <style>\n        body {\n            margin: 0;\n            padding: 0;\n        }\n\n        #map {\n            position: absolute;\n            left: 30%;\n            top: 0;\n            bottom: 0;\n            width: 70%;\n        }\n\n        .search-ui {\n            position: absolute;\n            top: 10px;\n            right: 10px;\n            z-index: 1000;\n        }\n\n        #list {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 50px;\n            width: 30%;\n            background: #fff;\n        }\n    </style>\n    <div id=\'map\'></div>\n    <div>\n        <input id=\'search\' placeholder=\'Enter state code\' />\n\n        <div>\n            <a href="javascript:addCircle(1000)">1km</a>\n            <a href="javascript:addCircle(2000)">2km</a>\n            <a href="javascript:addCircle(5000)">5km</a>\n        </div>\n\n        <div id="resultList">\n            <ul>\n\n            </ul>\n        </div>\n    </div>\n    <script>\n\n        var currentRadius = 2500;\n        var filterCircle = undefined;\n\n\n        function showMap(err, data) {\n            if (data.lbounds) {\n                map.fitBounds(data.lbounds);\n            } else if (data.latlng) {\n                map.setView([data.latlng[0], data.latlng[1]], 13);\n            }\n            map.setZoom(15);\n        }\n\n        function addCircle(radius) {\n\n            currentRadius = radius;\n            if (filterCircle == undefined) {\n                //add circle around map center\n                filterCircle = L.circle(L.latLng(40, -75), currentRadius, {\n                    opacity: 1,\n                    weight: 1,\n                    fillOpacity: 0.1\n                });//.addTo(map);\n                filterCircle.setLatLng(map.getCenter());\n            }\n\n            updateCircle();\n        }\n\n        function updateCircle() {\n\n            filterCircle.setLatLng(map.getCenter());\n            filterCircle.setRadius(currentRadius);\n\n            //filter with new radius\n            clearList();\n            currentLayer.setFilter(showAirport);\n\n            map.fitBounds(currentLayer.getBounds());\n        }\n\n        function showAirport(feature) {\n\n            bool = map.getCenter().distanceTo(L.latLng(\n                    feature.geometry.coordinates[1],\n                    feature.geometry.coordinates[0])) < currentRadius;\n\n            if (bool) updateList(feature);\n\n            return bool;\n        }\n\n        function clearList() {\n            $(\'#resultList li\').remove();\n        }\n\n        function updateList(feature) {\n\n            label = feature.properties.title;\n\n            dist = map.getCenter().distanceTo(L.latLng(\n                    feature.geometry.coordinates[1],\n                    feature.geometry.coordinates[0]));\n\n            $(\'#resultList\').append(\'<li>\' + Math.ceil(dist) + \'m - \' + label + \'</li>\');\n        }\n\n        function search() {\n            // get the value of the search input field\n            var searchString = $(\'#search\').val().toLowerCase();\n\n            console.log(searchString);\n\n            clearList();\n            currentLayer.setFilter(nameFilter);\n\n            map.fitBounds(currentLayer.getBounds());\n\n            // here we\'re simply comparing the \'state\' property of each marker\n            // to the search string, seeing whether the former contains the latter.\n            function nameFilter(feature) {\n                bool = (feature.properties.title\n                        .toLowerCase()\n                        .indexOf(searchString) !== -1);\n\n                if (bool) updateList(feature);\n\n                return bool;\n            }\n        }\n\n        L.mapbox.accessToken = \'pk.eyJ1IjoidGhpYmF1bHRtaWxhbiIsImEiOiJ0T3I0MWlNIn0.602NQtPqh9shh2FMYtn2xg\';\n        var geocoder = L.mapbox.geocoder(\'mapbox.places-v1\');\n        var map = L.mapbox.map(\'map\', \'thibaultmilan.jo6nhjne\');\n        geocoder.query(\'Metz, France\', showMap);\n\n        currentLayer = L.mapbox.featureLayer(\'thibaultmilan.jo622kog\').addTo(map);\n\n        $(\'#search\').keyup(search);\n\n\n    </script>\n</div>';

}
return __p
};

this["JST"]["rides"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-rides">\n\n  <div class="hellgy-hero">\n    <h2>Balades</h2>\n  </div>\n\n  <ul class="ride-list">\n    ';
 _.each(rides, function(r) { ;
__p += '\n      <li class="ride">\n        <i class="fa fa-' +
((__t = ( r.type )) == null ? '' : __t) +
'"></i>\n        <span class="ride-label">' +
((__t = ( r.name )) == null ? '' : __t) +
'</span>\n        <span class="ride-distance">\n          ';
 if (r.accessible) { ;
__p += '<i class="fa fa-wheelchair"></i> ';
 } ;
__p += '\n          ' +
((__t = ( r.distance )) == null ? '' : __t) +
' km\n        </span>\n      </li>\n    ';
 }) ;
__p += '\n  </ul>\n\n</div>';

}
return __p
};

this["JST"]["somewhere"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-goto">\n\n    <h2>Aller à ..</h2>\n\n    <input type="text" class="place-search" />\n\n</div>';

}
return __p
};

this["JST"]["stats"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="stats">\n\n    <div class="duration">\n        <i class="fa fa-refresh fa-spin"></i>\n    </div>\n\n    <div class="bicycle-advantages">\n        <div class="caloric">\n            <i class="fa fa-heart"></i>\n            <span class="value">\n                <!-- <i class="fa fa-refresh fa-spin"></i> -->\n            </span>\n            <label class="unit"></label>\n        </div>\n        <div class="ecologic">\n            <i class="fa fa-thumbs-up"></i>\n            <span class="value">\n                <!-- <i class="fa fa-refresh fa-spin"></i> -->\n            </span>\n            <label class="unit"></label>\n        </div>\n        <div class="achievement">\n            <i class="fa fa-graduation-cap"></i>\n            <span class="value">\n                <!-- <i class="fa fa-refresh fa-spin"></i> -->\n            </span>\n            <label class="unit"></label>\n        </div>\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["userprofile"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-profile">\n\n  <div class="user-hero">\n    <img src="http://avatars.io/email/' +
((__t = ( user.get('email') )) == null ? '' : __t) +
'?size=large" class="profile-picture">\n    <i class="edit fa fa-edit"></i>\n    <h2>' +
((__t = ( user.niceName() )) == null ? '' : __t) +
'</h2>\n  </div>\n\n  ';
 if (editable) { ;
__p += '\n\n    <input placeholder="Votre nom" name="name" type="text" value="' +
((__t = ( user.get('name') )) == null ? '' : __t) +
'" />\n\n    <br>\n\n    <input placeholder="Votre email" name="email" type="text" value="' +
((__t = ( user.get('email') )) == null ? '' : __t) +
'" />\n\n    <br>\n\n    <input placeholder="Votre adresse" name="homeAddress" type="text" value="' +
((__t = ( user.get('homeAddress') )) == null ? '' : __t) +
'" />\n\n    <br>\n\n    <input placeholder="L\'adresse du boulot" name="workAddress" type="text" value="' +
((__t = ( user.get('workAddress') )) == null ? '' : __t) +
'" />\n\n    <br>\n\n    <div class="styled-select">\n      <i class="fa fa-chevron-down" for="carType"></i>\n      <select name="carType" id="carType">\n        ';
 var t = user.get('carType') ;
__p += '\n        <option value="oil" ' +
((__t = ( t==='oil' ? 'selected' : '' )) == null ? '' : __t) +
'>Voiture essence</option>\n        <option value="diesel" ' +
((__t = ( t==='diesel' ? 'selected' : '' )) == null ? '' : __t) +
'>Voiture diesel</option>\n      </select>\n    </div>\n\n    <br>\n\n    <button class="edit">Enregistrer</button>\n\n  ';
 } else { ;
__p += '\n\n  <div class="hellgy-hero">\n    <h2>depuis 53 jours</h2>\n\n    <br>\n\n    <div class="item">\n      <i class="icon-iconmonstr-favorite-4-icon"></i>\n      <span class="value">2435</span>\n      <span class="unit">Kcal brûlées</span>\n      <span class="fun">(28 bières)</span>\n    </div>\n\n    <div class="item">\n      <i class="icon-co2"></i>\n      <span class="value">724</span>\n      <span class="unit">g C02 en moins</span>\n      <span class="fun">(8 ours blancs)</span>\n    </div>\n\n    <div class="item">\n      <i class="fa fa-euro"></i>\n      <span class="value">242,5</span>\n      <span class="unit">&euro; économisés</span>\n      <span class="fun">(28 burgers)</span>\n    </div>\n\n    <div class="item">\n      <i class="icon-iconmonstr-trophy-12-icon"></i>\n      <span class="value">65477</span>\n      <span class="unit">points gagnés</span>\n      <span class="fun">(12 offres offres)</span>\n    </div>\n\n  </div>\n\n  <br>\n  <br>\n\n  ' +
((__t = (
    JST.achievements({
      user: user,
      achievements: [
        { image: '', name: 'Sous stéroïdes'       },
        { image: '', name: 'Petites roulettes'    },
        { image: '', name: 'Cycliste du dimanche' },
        { image: '', name: 'Night rider'          },
        { image: '', name: 'Good karma'           },
        { image: '', name: 'Comme un lundi'       },
        { image: '', name: 'Le tour de Metz'      },
        { image: '', name: 'Tri cycles'           },
        { image: '', name: 'Sous stéroïdes'       },
        { image: '', name: 'Petites roulettes'    },
        { image: '', name: 'Cycliste du dimanche' },
        { image: '', name: 'Night rider'          },
        { image: '', name: 'Good karma'           },
        { image: '', name: 'Comme un lundi'       },
        { image: '', name: 'Le tour de Metz'      },
        { image: '', name: 'Tri cycles'           },
        { image: '', name: 'Sous stéroïdes'       },
        { image: '', name: 'Petites roulettes'    },
        { image: '', name: 'Cycliste du dimanche' },
        { image: '', name: 'Night rider'          },
        { image: '', name: 'Good karma'           },
        { image: '', name: 'Comme un lundi'       },
        { image: '', name: 'Le tour de Metz'      },
        { image: '', name: 'Tri cycles'           },
      ]
    })
  )) == null ? '' : __t) +
'\n\n  ';
 } ;
__p += '\n\n</div>';

}
return __p
};

this["JST"]["weather"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="weather">\n\n    <div class="morning">\n        <span class="label">Ce matin <time>8:00</time></span>\n        <i class="icon wi wi-day-sunny"></i>\n        <span class="temperature">10°</span>\n        <div class="humidity">\n            <i class="icon-humidite"></i>\n            <span class="value">10°</span>\n        </div>\n        <div class="wind">\n            <i class="icon-wind"></i>\n            <span class="value">10°</span>\n        </div>\n    </div>\n\n    <div class="evening">\n        <span class="label">Ce soir <time>17:00</time></span>\n        <i class="icon wi wi-day-cloudy"></i>\n        <span class="temperature">18°</span>\n        <div class="humidity">\n            <i class="icon-humidite"></i>\n            <span class="value">10°</span>\n        </div>\n        <div class="wind">\n            <i class="icon-wind"></i>\n            <span class="value">10°</span>\n        </div>\n    </div>\n\n    <div class="rain-chances">\n        Pluie dans l\'heure: <span class="rain-chances-value">25%</span> de chances\n    </div>\n\n</div>';

}
return __p
};