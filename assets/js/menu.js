// mobile menu
$(function() {
  $("#hamburger").on('click', function(e) {
    var $overlay = jQuery('<div>').attr('id', 'overlay');
    e.preventDefault();
    $(this).toggleClass('active');
    $("#header").toggleClass('open-menu');
    $("body, html").toggleClass('mobile-menu');
    if (!$("#overlay").length) {
      $("body").append($overlay);
      $overlay.fadeOut(0);
    }
    $("#overlay").fadeToggle(700);
    $("html,body").css("overflow","hidden");
  });

  $('body').on('click touchstart', '#overlay', function(e) {
    e.preventDefault();
    $("body, html").removeClass('mobile-menu');
    $("#overlay").fadeOut(700);
    $('#hamburger').removeClass('active');
    $("html,body").css("overflow","auto");

  });

  $('body').on('click touchstart', '.close', function(e) {
    e.preventDefault();
    $("body, html").removeClass('mobile-menu');
    $("#overlay").fadeOut(700);
    $('#hamburger').removeClass('active');
    $("html,body").css("overflow","auto");

  });

  $("#mobile-menu a").on('click', function(e) {
    $("body, html").removeClass('mobile-menu');
    $("#overlay").fadeOut(700);
    $('#hamburger').removeClass('active');
    $("html,body").css("overflow","auto");
  });
});
