'use strict';

ABC.Views.Rides = Backbone.Marionette.View.extend({

  template: JST.rides,

  render: function () {

    this.$el.html(this.template({
      rides: this.rides
    }));

    return this.$el;
  },

  rides: [
    { distance: 35, type: 'bicycle',    name: 'Good karma'           },
    { distance: 35, type: 'bicycle',    name: 'Le tour de Metz'      ,accessible: 1 },
    { distance: 35, type: 'binoculars', name: 'Lac Blala'            },
    { distance: 35, type: 'binoculars', name: 'Petites roulettes'    },
    { distance: 35, type: 'university', name: 'Musee Machin'         },
    { distance: 45, type: 'bicycle',    name: 'Le tour de Metz'      },
    { distance: 45, type: 'bicycle',    name: 'Night rider'          },
    { distance: 45, type: 'bicycle',    name: 'Sous stéroïdes'       },
    { distance: 45, type: 'bicycle',    name: 'Sous stéroïdes'       },
    { distance: 45, type: 'binoculars', name: 'Forêt enchantée'      },
    { distance: 45, type: 'binoculars', name: 'Petites roulettes'    },
    { distance: 45, type: 'medkit',     name: 'Centre de secours'    ,accessible: 1 },
    { distance: 45, type: 'university', name: 'Musee Bidule'         },
    { distance: 50, type: 'bicycle',    name: 'Promenade Yvette'     },
    { distance: 50, type: 'bicycle',    name: 'Tri cycles'           },
    { distance: 50, type: 'bicycle',    name: 'Tri cycles'           },
    { distance: 50, type: 'binoculars', name: 'Comme un lundi'       },
    { distance: 50, type: 'binoculars', name: 'Point de Vue'         },
    { distance: 50, type: 'medkit',     name: 'Comme un lundi'       },
    { distance: 50, type: 'medkit',     name: 'Cycliste du dimanche' },
    { distance: 50, type: 'university', name: 'Musee Machin'         ,accessible: 1 },
    { distance: 50, type: 'university', name: 'Musee Machin'         },
    { distance: 50, type: 'university', name: 'Musee Machin'         },
    { distance: 50, type: 'university', name: 'Musee Truc'           },
  ]

});