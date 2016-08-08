$(document).ready(function() {
var sentence = prompt("Please enter a sentence:");

alert(sentence);

var firstLast = function(sentence) {
  var first = sentence.charAt(0);
  var last = sentence.charAt((sentence.length) - 1);
  return first.toUpperCase() + last.toUpperCase();
}

var swap = function(sentence) {
  var char1 = sentence.charAt((sentence.length) - 1);
  var char2 = sentence.charAt(0);
  return char1.toUpperCase() + char2.toUpperCase();
}

var call = function(sentence) {
  return sentence + swap(firstLast(sentence));
}

var divide = function(sentence) {
  var letter = sentence.charAt((sentence.length / 2).toFixed());
  return letter + call(sentence);
}

alert(divide(sentence));
})
