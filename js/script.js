const call_btn = $('.header__button');
const modal_close_btn = $('.modal-form__close-btn');
const modal_form = $('.modal-form');

call_btn.click(function(){
  $('.modal-form').show(500);
});

modal_close_btn.click(function(){
  $('.modal-form').hide(500);
});

$(document).click(function (e) {
  if ($(e.target).is('.modal-form')) {
    $('.modal-form').hide(500);
  }
});