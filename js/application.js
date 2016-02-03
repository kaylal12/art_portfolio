$(document).ready(function() {

  $("#about").on('click', function(){
    $("#home-page").hide();
    $("#traditional-page").hide();
    $("#digital-page").hide();
    $("#about-page").slideDown();
  });

  $("#traditional").on('click', function(){
    $("#home-page").hide();
    $("#about-page").hide();
    $("#digital-page").hide();
    $("#traditional-page").slideDown();
  });

  $("#digital").on('click', function(){
    $("#home-page").hide();
    $("#about-page").hide();
    $("#traditional-page").hide();
    $("#digital-page").slideDown();
  });

  $("#home").on('click', function(){
    $("#digital-page").hide();
    $("#about-page").hide();
    $("#traditional-page").hide();
    $("#home-page").slideDown();
  });

});
