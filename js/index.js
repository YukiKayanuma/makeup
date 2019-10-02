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

