$(function ($) {

    var ht = $(window).height();

    //ANIMATED ELEMENTS TRIGGERING
    $('.test').waypoint(function() {
      console.log('appear');
      $(this).each(function(){ 
        var animClasses = $(this).data('animation');
        $(this).addClass('animated activated' + ' ' + animClasses);
      });
    }, {
     offset: ht - 100
    });

    $('.images .thumb a').hover(function () {
      var overlay = $(this).find('.overlay');
      var animation = overlay.data('animation');
      overlay.addClass('animated activated' + ' ' + animation).css({'opacity': 1});
    }, function () {
      var overlay = $(this).find('.overlay');
      var animation = overlay.data('animation');
      overlay.removeClass('animated activated' + ' ' + animation).animate({'opacity': 0});
    });

   
});
