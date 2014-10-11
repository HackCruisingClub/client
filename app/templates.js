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
__p += '<ul id="menu-list">\n\n    <li class="menu-username">\n        <a data-view="UserProfile">' +
((__t = ( user.niceName() )) == null ? '' : __t) +
'</a>\n    </li>\n\n    <li class="menu-link">\n        <a data-view="Somewhere">Aller à</a>\n    </li>\n\n    <li class="menu-link">\n        <a data-view="Rides">Balades</a>\n    </li>\n\n    <li class="menu-link">\n        <a data-view="Achievements">Trophés</a>\n    </li>\n\n    <li class="menu-link">\n        <a data-view="Partners">Réducs</a>\n    </li>\n\n    <li class="menu-link">\n        <a data-view="Friends">Coupains</a>\n    </li>\n\n</ul>';

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

this["JST"]["userprofile"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="view-profile">\n\n    <h2>Profil</h2>\n\n    <p>Lorem ipsum</p>\n\n</div>';

}
return __p
};