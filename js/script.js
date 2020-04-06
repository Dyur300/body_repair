$(document).ready(function(){
  $('.navbar__call-back').click(function(event){
    $('.back-call-form').css({'top': $(window).scrollTop() +100}).addClass('active');
    $('.request-thanks').removeClass('active');
    $('.popup-bg').addClass('active');
  });
  $('.request-submit-btn').click(function(event){
    $('.window').removeClass('active');
    $('.request-thanks').css({'top': $(window).scrollTop() +100}).addClass('active');
    $('.popup-bg').addClass('active');
  });
  $('.fast-request').click(function(event){
    $('.fast-request-window').css({'top': $(window).scrollTop() +100}).addClass('active');
    $('.request-thanks').removeClass('active');
    $('.popup-bg').addClass('active');
  });
  $('.window-close-btn').click(function(event){
    $('.window').removeClass('active');
    $('.popup-bg').removeClass('active');
  });
  $('#detail-request-btn').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#detail-request').offset().top }, 1000);
    e.preventDefault();
  });
  $('.popup-bg').click(function(){
    $(this).removeClass('active');
    $('.window').removeClass('active');
  });
  $(window).scroll(function(){
    $('.window').css({'top': $(window).scrollTop() +100});
  }).scroll();
});