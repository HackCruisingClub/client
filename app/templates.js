this["JST"] = this["JST"] || {};

this["JST"]["achievements"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-achievements">\n\n    <h2>Trophés</h2>\n\n    <p>Lorem ipsum</p>\n\n</div>';

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
__p += '<div class="view-dashboard">\n\n    <h2>Dashboard</h2>\n\n    <p>Lorem ipsum</p>\n\n</div>';

}
return __p
};

this["JST"]["estimation"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="estimation">\n\n    <div class="label">maison<i class="fa fa-chevron-right"></i>bureau</div>\n\n    <div class="kilometers"></div>\n\n    <div class="by-car">\n        <i class="fa fa-car"></i>\n        <time>30 min</time>\n    </div>\n\n    <div class="by-car">\n        <i class="fa fa-bicycle"></i>\n        <time>18 min</time>\n    </div>\n\n    <div class="bicycle-advantages">\n\n        <div class="label">à bicyclette</div>\n\n        <div class="caloric">\n            <i class="fa fa-car"></i>\n            <span class="value">-99</span>\n            <label class="unit">Kcal</label>\n        </div>\n        <div class="ecologic">\n            <span class="value">-35g</span>\n            <label class="unit">CO2</label>\n        </div>\n        <div class="achievement">\n            <span class="value">+23</span>\n            <label class="unit">points</label>\n        </div>\n    </div>\n\n</div>\n';

}
return __p
};

this["JST"]["friends"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-friends">\n\n    <h2>Copains</h2>\n\n    <p>Lorem ipsum</p>\n\n</div>';

}
return __p
};

this["JST"]["menu"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav>  \n  <ul id="menu-list">\n\n      <li class="menu-username">\n          <a data-view="UserProfile">\n              <i class="fa fa-home"></i> ' +
((__t = ( user.niceName() )) == null ? '' : __t) +
'\n          </a>\n      </li>\n\n      <li class="menu-link">\n          <a data-view="Somewhere">\n              <i class="fa fa-random"></i> Aller à\n          </a>\n      </li>\n\n      <li class="menu-link">\n          <a data-view="Rides">\n              <i class="fa fa-map-marker"></i> Balades\n          </a>\n      </li>\n\n      <li class="menu-link">\n          <a data-view="Achievements">\n              <i class="fa fa-graduation-cap"></i> Trophés\n          </a>\n      </li>\n\n      <li class="menu-link">\n          <a data-view="Partners">\n              <i class="fa fa-money"></i> Réductions\n          </a>\n      </li>\n\n      <li class="menu-link">\n          <a data-view="Friends">\n              <i class="fa fa-users"></i> Coupains\n          </a>\n      </li>\n\n      <li class="menu-link">\n          <a data-view="Config">\n              <i class="fa fa-gears"></i> Paramètres\n          </a>\n      </li>\n\n  </ul>\n</nav>\n';

}
return __p
};

this["JST"]["rides"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-rides">\n\n    <h2>Balades</h2>\n\n    <p>Lorem ipsum</p>\n\n</div>';

}
return __p
};

this["JST"]["somewhere"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-goto">\n\n    <h2>Aller à ..</h2>\n\n    <p>Lorem ipsum</p>\n\n</div>';

}
return __p
};

this["JST"]["stats"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="stats">\n\n    <div class="label">depuis <span class="duration">42 jours</span></div>\n\n    <div class="bicycle-advantages">\n        <div class="caloric">\n            <i class="fa fa-heart"></i>\n            <span class="value">-99</span>\n            <label class="unit">Kcal</label>\n        </div>\n        <div class="ecologic">\n            <i class="fa fa-thumbs-up"></i>\n            <span class="value">-35g</span>\n            <label class="unit">CO2</label>\n        </div>\n        <div class="achievement">\n            <i class="fa fa-graduation-cap"></i>\n            <span class="value">+23</span>\n            <label class="unit">points</label>\n        </div>\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["userprofile"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-profile">\n\n    <h2>Profil</h2>\n\n    <p>Lorem ipsum</p>\n\n</div>';

}
return __p
};

this["JST"]["weather"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="weather">\n\n    <div class="morning">\n        <span class="label">Ce matin <time>8:00</time></span>\n        <i class="icon wi wi-day-sunny"></i>\n        <span class="temperature">10°</span>\n    </div>\n\n    <div class="evening">\n        <span class="label">Ce soir <time>17:00</time></span>\n        <i class="icon wi wi-day-cloudy"></i>\n        <span class="temperature">18°</span>\n    </div>\n\n    <div class="rain-chances">\n        Pluie dans l\'heure: <span class="rain-chances-value">25%</span> de chances\n    </div>\n\n</div>';

}
return __p
};