$(document).ready(function() {

  $('.menu-toggle').click(function() {
    $('.menu-list').slideToggle();
  });

  $('.menu-list > li > a').click(function(e) {
    let $submenu = $(this).siblings('.submenu');
    if ($submenu.length) {
      e.preventDefault();  
      $submenu.slideToggle();
    }
  });
});
