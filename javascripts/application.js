

function getLetters(phrase) {
  phrase.split(" ").forEach(function(word) {
    word.split('').forEach(function(letter) {
      console.log(letter)
    })
  })
}
$(document).ready(function() {
  $('.bubbles-large').toggleClass('active');
  $('.bubbles-small').toggleClass('active');
  $('.bottom').addClass('active');
  setTimeout(showWords, 2000);
  setTimeout(fadeIn, 1800)
})
function fadeIn() {
  $('.header').addClass('active');
}
function showWords() {
  $('.right').addClass('active');
  $('.menu').addClass('active');
  $(".social-media a").addClass('active');
}
$(document).on('click', '.hamburger', function() {
  $(this).toggleClass('is-active');
  $('.sidebar').toggleClass('active');
  if ($(window).width() < 600) {
    $('html,body').css('overflow', 'scroll');
  }
})