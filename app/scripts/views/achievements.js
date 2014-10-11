'use strict';

ABC.Views.Achievements = Backbone.Marionette.View.extend({

  template: JST.achievements,

  render: function () {

    this.$el.html(this.template({
      achievements: this.achievements
    }));

    return this.$el;
  },

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

});