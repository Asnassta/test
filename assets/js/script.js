function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
	/*======Header-catalog (dropdown)=============*/
  $(".header-catalog__item").hover( function(event) {
    event.preventDefault();
    if ($(window).width() >= 1141){
      $(this).find(".header-catalog__name").toggleClass("dropdown");
      $(this).find(".header-catalog__dropdown").slideToggle();   
    }
  });
  $(".header-catalog__name").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() <= 1140){
      $(this).toggleClass("dropdown");
      $(this).parent().find(".header-catalog__dropdown").slideToggle();   
    }
  });
  /*==========/header-catalog (dropdown)=========*/

  /*======Header-catalog (mobile)=============*/
  $(".header__catalog-btn").on("click", function(event) {
    event.preventDefault();
    $(".header-catalog").slideDown();   
  });
  $(".header-catalog__close").on("click", function(event) {
    event.preventDefault();
    $(".header-catalog").slideUp();   
  });
  /*==========/header-catalog (mobile)=========*/

    /*======Nav__links (mobile)=============*/
  $(".nav__open").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this).find(".burger").toggleClass("active");
    $(".nav__links").toggleClass("active");   
  });
  /*==========/nav__links (mobile)=========*/

  /*=========Favorite========*/
  $(".product-card__favorite").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");  
  });
  /*=========/favorite========*/

  /*======Footer-menu (dropdown)=============*/
  $(".footer-menu__title_open").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle();   
  });
  /*==========/footer-menu (dropdown)=========*/

  /*===============Popup-size=================*/
  $(".product-card__open-size").on("click", function(event) {
    event.preventDefault();
    $(".popup-size").fadeIn(333);
    $(".popup-size__inner").fadeIn(333);
    $('body').addClass("hidden");
  });
  $(".popup-size__close,  .closex").on("click", function(event) {
    event.preventDefault();
    $(".popup-size").fadeOut('333');
    $(".popup-size__inner").fadeOut(333);
    $('body').removeClass("hidden");
  });
/*==============/popup-size=================*/

  /*===============Popup-buy=================*/
  $(".btn-buy").on("click", function(event) {
    event.preventDefault();
    $(".popup-buy").fadeIn(333);
    $(".popup-buy__inner").fadeIn(333);
    $('body').addClass("hidden");
  });
  $(".popup-buy__close,  .closex").on("click", function(event) {
    event.preventDefault();
    $(".popup-buy").fadeOut('333');
    $(".popup-buy__inner").fadeOut(333);
    $('body').removeClass("hidden");
  });
/*==============/popup-buy=================*/

  /*===============Popup-entrance=================*/
  $(".login-btn").on("click", function(event) {
    event.preventDefault();
    $(".popup-entrance").fadeIn(333);
    $(".popup-entrance .popup__inner").fadeIn(333);
    $('body').addClass("hidden");
  });
  $(".popup-entrance .popup__close,  .closex").on("click", function(event) {
    event.preventDefault();
    $(".popup-entrance").fadeOut('333');
    $(".popup-entrance .popup__inner").fadeOut(333);
    $('body').removeClass("hidden");
  });
/*==============/popup-entrance=================*/

  /*===============Popup-fast=================*/
  $(".btn-fast").on("click", function(event) {
    event.preventDefault();
    $(".popup").not(".popup-fast").fadeOut(333);
    $(".popup-fast").fadeIn(333);
    $(".popup-fast .popup__inner").fadeIn(111);
    $('body').addClass("hidden");
  });
  $(".popup-fast .popup__close,  .closex").on("click", function(event) {
    event.preventDefault();
    $(".popup-fast").fadeOut('333');
    $(".popup-fast .popup__inner").fadeOut(333);
    $('body').removeClass("hidden");
  });
/*==============/popup-fast=================*/

  /*===============Popup-added=================*/
  $(".popup-buy__btn-buy, .product__btn-buy").on("click", function(event) {
    event.preventDefault();
    $(".popup").not(".popup-added").fadeOut(333);
    $(".popup-added").fadeIn(333);
    $(".popup-added .popup__inner").fadeIn(111);
    $('body').addClass("hidden");
  });
  $(".popup-added .popup__close,  .closex").on("click", function(event) {
    event.preventDefault();
    $(".popup-added").fadeOut('333');
    $(".popup-added .popup__inner").fadeOut(333);
    $('body').removeClass("hidden");
  });
/*==============/popup-added=================*/

  /*=========Filters (toggle)========*/
  $(".category__btn-show").on("click", function(event) {
    event.preventDefault();
    $(".category__filters").slideDown();
    $('body').addClass("hidden");  
  });
  $(".filters-close").on("click", function(event) {
    event.preventDefault();
    $(".category__filters").slideUp();
    $('body').removeClass("hidden");  
  });
  /*=========/filters (toggle)========*/

    /*=========Product__favorite========*/
  $(".product__favorite").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");  
  });
  /*=========/product__favorite========*/

  /*=========Product-info-mobile========*/
  $(".product-info__title").on("click", function() {
    $(this).toggleClass("active");  
    $(this).next().slideToggle();  
  });
  /*=========/product-info-mobile========*/

  /*=========Cart (order preview)========*/
  $(".header__btn_cart").on("click", function(event) {
    if ($(window).width() >= 540){
      event.preventDefault();
      $(this).toggleClass("active");  
      $(".header__order").fadeToggle(222);
    }  
  });
  /*=========/cart (order preview)========*/

  /*==========Label===========*/
 $('.input-box select').on('change', function() {
 
 if($(this).val() == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }
});

 $('.input-box input, .input-box textarea').on('input', function() {
 if($(this).val().length == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }

});
$( "body" ).delegate( "*", "focus blur", function() {
  var elem =  $(this);
  setTimeout(function() {
    if((elem).attr('type') == 'text' || (elem).attr('type') == 'password'
                              || (elem).attr('type') == 'email')

    {
      elem.parent().toggleClass( "active", elem.is( ":focus" ) );
    }
  }, 0 );
});
 /*==========label===========*/

  /*=========Input-box_password========*/
  $(".input-box__show").on("click", function() {
    $(this).toggleClass("active");
    if ($(this).hasClass('active')){

    $(this).parent().find('input').attr('type', 'text');

  } else {

    $(this).parent().find('input').attr('type', 'password');

  }  
  });
  /*=========/input-box_password========*/

  /*========PriceChange========*/
  $('input[name="product-size"]').on('change', function() {
    
    price = $(this).attr('attr-price');
    oldprice = $(this).attr('attr-old-price');
   
    
    $(this).parent().parent().parent().parent().find('.new_price').html(price);
    $(this).parent().parent().parent().parent().find('.old_price').html(oldprice);
 
   });
  /*========/priceChange========*/
  

  /*======Quantity===*/
function change_count(variable, a)
  { 

      vl = variable.parent().find('input');
 
      vcount =  parseInt(vl.val());
    
      if(a == 'plus')
      {
        vcount = vcount+1;
      }
      else
      {
        if(vcount > 1)
        {
          vcount = vcount-1;
        }    
      }
    
      variable.parent().find('input').val(vcount);
   
  }

  $(".product-quantity__plus").on("click", function() {
    event.preventDefault();
    change_count($(this), 'plus');
  });

  $(".product-quantity__minus").on("click", function() {
    event.preventDefault();
    change_count($(this), 'minus');
  });
  /*======/quantity===*/




  /*======Slider=============*/
    function productSlider()
{
  if($('.product-popular__slider').hasClass('slick-slider'))
  {
    $('.product-popular__slider').slick('unslick');
  }
  
  if ($(window).width() > 767){
    $('.product-popular__slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrow_prev'),
      nextArrow: $('.slider-arrow_next'),
    });
  }
}

  $(window).resize(function(){
    productSlider();
  });

      productSlider();
  /*======/slider=============*/

});




