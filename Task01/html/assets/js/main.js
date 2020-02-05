$( document ).ready(function() {

  $('.btn-menu').on("click", function() {
    $(this).toggleClass('is-active');
    $(this).next('#gnav').slideToggle();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#backtop').fadeIn();
    } else {
      $('#backtop').fadeOut();
    }
  });

});