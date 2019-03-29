

function getLetters(phrase) {
  phrase.split(" ").forEach(function(word) {
    word.split('').forEach(function(letter) {
      console.log(letter)
    })
  })
}
$(document).ready(function() {
  var heroSlogan = "synth XOXO poutine bicycle rights godard hashtag glossier";
  getLetters(heroSlogan);
})
$(document).on('click', 'button', function() {
  $('.modal').toggleClass('active');
  $('.bubbles').toggleClass('active');
  $('.bubbles-large').toggleClass('active');
  $('.bubbles-small').toggleClass('active');
})