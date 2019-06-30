function fadeIn() {
  $('.bubbles-large').toggleClass('active');
  $('.bubbles-small').toggleClass('active');
}
function showWords() {
  $('.right').addClass('active');
  $('.menu').addClass('active');
  $(".social-media a").addClass('active');
}
$(document).ready(function() {
  $('.bottom').addClass('active');
  setTimeout(function() {
    showWords();
  }, 1000);
  setTimeout(function() {
    fadeIn();
  }, 1000);
})

$(document).on('click', '.hamburger', function() {
  $(this).toggleClass('is-active');
  $('.sidebar').toggleClass('active');
  if ($(window).width() < 600) {
    $('html,body').toggleClass('overflow');
  }
})