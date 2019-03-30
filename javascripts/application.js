

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
  setTimeout(showWords, 1000);
})
function showWords() {
  $('.right').addClass('active');
  $('.menu').addClass('active');
  $(".social-media a").addClass('active');
  $('.wrapper').addClass('active');
}
$(document).on('click', '.menu', function() {
  $('.sidebar').toggleClass('active');
})