$(function(){
  $('.ham').on('click', function () {
    $('#nav-sp').toggleClass('active');
    $('.ham').toggleClass('active');
  })
  $('#nav-sp li a').on('click', function () {
    $('#nav-sp').toggleClass('active');
    $('.ham').toggleClass('active');
  })
})

$(function(){
  $('a[href^="#"]').click(function() {
     var speed = 400;
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var position = target.offset().top -70;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  })
})

