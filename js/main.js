/* // Scroll To

//obtenemos la posición en la que se encuentra el botón
var posicion_boton = $("#boton").offset().top;
                         
//hacemos scroll hasta el botón
$("html, body").animate({scrollTop:posicion_boton+"px"});

//El siguiente código hace que vayamos al principio de la página:
$("#arriba").click(function(){
      $("html, body").animate({scrollTop:"0px"});
});

//Ahora para ir al final de la página:
//obtenemos la altura del documento
var altura = $(document).height();
 
$("#abajo").click(function(){
      $("html, body").animate({scrollTop:altura+"px"});
});

//El siguiente código nos indica cuando se llega al final de la página.
//obtenemos la altura del documento
var altura = $(document).height();
 
$(window).scroll(function(){
      if($(window).scrollTop() + $(window).height() == altura) {
            alert("Has llegado al final de la página");
      }
                
}); */

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
