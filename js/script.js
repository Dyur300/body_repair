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
