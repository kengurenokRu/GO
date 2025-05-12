const callBtn = $('.header__button');
const callBtn_burger = $('.burger-menu__button');
const modalCloseBtn = $('.modal-form__close-btn');
const modalForm = $('.modal-form');
const header__burger = $('.header__burger');
const burgerMenu = $('.burger-menu');
const burgerMenu__linkTtext = $('.burger-menu__link-text');
const burgerMenu__item = $('.burger-menu__item');


function hide_burgerMenu() {
  if ($('.header__burger').hasClass("header__burger_active")) {
    $('.burger-menu').hide(500);
    $('.header__burger-border:nth-child(1)').css({
      "transform": "rotate(0)"
    });
    $('.header__burger-border:nth-child(2)').css({
      "transform": "rotate(0)"
    });
    $('.header__burger-border:nth-child(3)').show();
    $('.header__burger').toggleClass("header__burger_active");
  }
}

burgerMenu__linkTtext.click(function () {
  hide_burgerMenu();  
});

burgerMenu__item.click(function () {
  hide_burgerMenu();  
});

callBtn.click(function () {
  hide_burgerMenu();
  $('.modal-form').show(500);
});

callBtn_burger.click(function () {
  hide_burgerMenu();
  $('.modal-form').show(500);
});

modalCloseBtn.click(function () {
  $('.modal-form').hide(500);
});

$(document).click(function (e) {
  if ($(e.target).is('.modal-form')) {
    $('.modal-form').hide(500);
  }
  else if ($(e.target).is('.burger-menu') || $(e.target).is('.burger-menu__link-text')) {
    $('.burger-menu').hide(500);
  }
});

header__burger.click(function () {
  if ($('.header__burger').hasClass("header__burger_active")) {
    $('.burger-menu').hide(500);
    $('.header__burger-border:nth-child(1)').css({
      "transform": "rotate(0)"
    });
    $('.header__burger-border:nth-child(2)').css({
      "transform": "rotate(0)"
    });
    $('.header__burger-border:nth-child(3)').show();
  }
  else {
    $('.header__burger-border:nth-child(1)').css({
      "transform": "rotate(45deg)",
      "transform-origin": "11px 9px"
    });
    $('.header__burger-border:nth-child(2)').css({
      "transform": "rotate(-45deg)",
      "transform-origin": "30px 15px"
    });
    $('.header__burger-border:nth-child(3)').hide();
    $('.modal-form').hide(500);
    $('.burger-menu').show(500);
  }
  $('.header__burger').toggleClass("header__burger_active");
});


$('.faq__list').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
  icons: {
    "header": "faq__item_icon",
    "activeHeader": "faq__item_icon-active"
  }
});

ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.723151, 37.565021],
    zoom: 17
  });

  const mark = new ymaps.Placemark([55.723151, 37.565021], {
    hintContent: 'Game Over',
    balloonContent: 'Game Over'
  });
  myMap.geoObjects.add(mark);
  myMap.container.fitToViewport();
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.slider__button-right',
    prevEl: '.slider__button-left',
  },
});

$('.reservation__form').submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'POST',
    data: $(this).serialize(),
    dataType: 'html',
    success(data) {
      alert('Ваша заявка принята');
    },
    error(err){
      alert('Что-то пошло не так');
      console.error(err);
    }
  })
});

$('.modal-form__window').submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'POST',
    dataType: 'html',
    data: $(this).serialize(),
    success(data) {
      alert('Ваша заявка принята');
    },
    error(){
      alert('Что-то пошло не так');
    }
  })
  $('.modal-form').hide(500);
});

/*https://postman-echo.com/post */