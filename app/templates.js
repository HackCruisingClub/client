this["JST"] = this["JST"] || {};

this["JST"]["achievements"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-achievements">\n\n    <h2>Trophés</h2>\n\n    <div class="achievements-weather"></div>\n\n    <div class="achievements-estimation"></div>\n\n    <div class="achievements-stats"></div>\n\n</div>';

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
__p += '<div class="estimation">\n\n    <div class="ridelabel">maison<i class="fa fa-chevron-right"></i>bureau</div>\n\n    <div class="bicycle_km">\n        <span class="value"></span><span class="unit"></span>\n    </div>\n\n    <div class="car_time">\n        <i class="fa fa-car"></i>\n        <time class="value">30</time><span class="unit"></span>\n    </div>\n\n    <div class="bicycle_time">\n        <i class="fa fa-bicycle"></i>\n        <time class="value">30</time><span class="unit"></span>\n    </div>\n\n    <div class="advantages">\n\n        <div class="label">à bicyclette</div>\n\n        <div class="caloric">\n            <i class="fa fa-car"></i>\n            <span class="value">-99</span>\n            <label class="unit">Kcal</label>\n        </div>\n        <div class="ecologic">\n            <span class="value">-35g</span>\n            <label class="unit">CO2</label>\n        </div>\n        <div class="points">\n            <span class="value">+23</span>\n            <label class="unit">points</label>\n        </div>\n    </div>\n\n</div>\n';

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
__p += '<nav>\n  <div id="profile">\n    <a data-view="UserProfile">\n      <img src="http://avatars.io/email/' +
((__t = ( user.get('email') )) == null ? '' : __t) +
'" alt="" class="profile-picture">' +
((__t = ( user.niceName() )) == null ? '' : __t) +
'\n    </a>\n  </div>\n  <ul id="menu-list">\n    <li class="menu-link">\n      <a data-view="Somewhere">\n        <i class="fa fa-random"></i> Aller à\n      </a>\n    </li>\n    <li class="menu-link">\n      <a data-view="Rides">\n        <i class="fa fa-map-marker"></i> Balades\n      </a>\n    </li>\n    <li class="menu-link">\n      <a data-view="Achievements">\n        <i class="fa fa-graduation-cap"></i> Trophés\n      </a>\n    </li>\n    <li class="menu-link">\n      <a data-view="Partners">\n        <i class="fa fa-money"></i> Réductions\n      </a>\n    </li>\n    <li class="menu-link">\n      <a data-view="Friends">\n        <i class="fa fa-users"></i> Coupains\n      </a>\n    </li>\n    <li class="menu-link">\n      <a data-view="Config">\n        <i class="fa fa-gears"></i> Paramètres\n      </a>\n    </li>\n  </ul>\n</nav>\n';

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
__p += '<div class="view-profile">\n\n  <h2>Profil</h2> <i class="edit fa fa-edit"></i>\n\n  <br>\n\n  ';
 if (editable) { ;
__p += '\n\n    <input placeholder="Votre nom" name="name" type="text" value="' +
((__t = ( user.get('name') )) == null ? '' : __t) +
'" />\n\n    <br>\n\n    <input placeholder="Votre email" name="email" type="text" value="' +
((__t = ( user.get('email') )) == null ? '' : __t) +
'" />\n\n    <br>\n\n    <input placeholder="Votre adresse" name="homeAddress" type="text" value="' +
((__t = ( user.get('homeAddress') )) == null ? '' : __t) +
'" />\n\n    <br>\n\n    <input placeholder="L\'adresse du boulot" name="workAddress" type="text" value="' +
((__t = ( user.get('workAddress') )) == null ? '' : __t) +
'" />\n\n    <br>\n\n    <select class="" name="carType" name="carType">\n\n      <option value="oil" ' +
((__t = ( user.get('carType') === 'oil' ? 'selected' : '' )) == null ? '' : __t) +
' >Essence</option>\n\n      <option value="diesel" ' +
((__t = ( user.get('carType') === 'diesel' ? 'selected' : '' )) == null ? '' : __t) +
' >Diesel</option>\n\n    </select>\n\n    <br>\n\n  ';
 } else { ;
__p += '\n\n    <label class="name">' +
((__t = ( user.get('name') )) == null ? '' : __t) +
'</label>\n\n    <br>\n\n    <label class="email">' +
((__t = ( user.get('email') )) == null ? '' : __t) +
'</label>\n\n    <br>\n\n    <label class="homeAddress">' +
((__t = ( user.get('homeAddress') )) == null ? '' : __t) +
'</label>\n\n    <br>\n\n    <label class="workAddress">' +
((__t = ( user.get('workAddress') )) == null ? '' : __t) +
'</label>\n\n    <br>\n\n    <label class="carType">' +
((__t = ( user.niceCarType() )) == null ? '' : __t) +
'</label>\n\n    <br>\n\n  ';
 } ;
__p += '\n\n  <br>\n  <br>\n  <br>\n\n</div>';

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