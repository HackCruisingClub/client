'use strict';

ABC.app = new ABC.App();

ABC.app.render();

$('.menu-toogler').on('click',function(event){
  event.preventDefault();
  $('.transformer').toggleClass('is-open');
});
