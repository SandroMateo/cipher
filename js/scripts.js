$(document).ready(function() {
var sentence = prompt("Please enter a sentence:");

alert(sentence);

var firstLast = function(sentence) {
  var first = sentence.charAt(0);
  var last = sentence.charAt((sentence.length) - 2);
  return first.toUpperCase() + last.toUpperCase();
}
alert(firstLast(sentence));

var swap = function(sentence) {
  var char1 = sentence.charAt((sentence.length) - 2);
  var char2 = sentence.charAt(0);
  return char1.toUpperCase() + char2.toUpperCase();
}

alert(swap(sentence));

var call = function(sentence) {
  return swap(firstLast(sentence));
}

alert(call(sentence));
})
