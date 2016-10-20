
$(document).ready(function() {
  $('.details').hide();
  $('.projects h4').click(function() {
    console.log('prjs li cklik');
    var $details = $(this).next('.details');
    if ($details.is(':hidden')) {
      $('.details').hide();
      $details.slideDown();
      //$(this).addClass('close');
    } else {
      $details.fadeOut();
      //$(this).removeClass('close');
    }
  }); // Koniec funkcji click.
}); // Koniec funkcji ready.
