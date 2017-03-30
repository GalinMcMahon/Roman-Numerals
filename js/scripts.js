var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;
var output = [];
var str = "I"



$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    var userInput = $("input#numberInput").val();

  //   if (userInput > 3999) {
  //     alert("Please enter an integer less than 4000")
  //
  // }
      var onePosition = (userInput.slice(-1));
      if (onePosition < 4 && onePosition > 0) {
        var ones = str.repeat(onePosition);
        alert(ones)

      } else if
        (onePosition > 4 && onePosition < 9) {
          var fiveeight = (onePosition-5);
          var fives = str.repeat(fiveeight);
          alert("V"+fives)

      } else if (onePosition == 4) {
          alert("IV")

      } else if (onePosition == 9) {
          alert("IX")
      } else {
        alert("Please enter 1-9")
      }



    event.preventDefault();
  });
});
