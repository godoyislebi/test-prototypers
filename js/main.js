// Función nav
$(window).load(function() {
  $(".btn-nav").on("click tap", function() {
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
    $(this).toggleClass("animated");
  });
});

// Función Slider
$('#slides').superslides()
$.fn.superslides.fx = $.extend({
  flip: function(orientation, complete) {
    console.log(orientation);
    complete();
  }
}, $.fn.superslides.fx);
