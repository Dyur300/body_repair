$(document).ready(function(){
  $('.call-back', this).click(function(event){
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
  $('input[type="tel"]').mask("+7 (999) 999-99-99");


  //Показывать карту только когда докрутили до нее
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa70f75f179643881b5cea348b1bb6d761aae92d39024c94849fcf9e2b4aa7ae7&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll');
    }
  });
});

$(document).ready(function(){

  var win = $(this); //this = window
  $(function(){
  fnName();
  window.onresize = fnName;
  });   
  function fnName(){
  if (win.width() <= 768) {
    $('.reviews-slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 2,
      adaptiveHeight: true, 
      variableWidth: true,
      centerMode: true,
      responsive: [
        {
            breakpoint: 550,
            settings: {
              variableWidth: false,
              slidesToShow: 1,
            },

      }, {
      breakpoint: 400,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        centerMode: false,
      }
    }
    ],
    });
      }
  }
  

});
