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

      if (userInput < 4 && userInput > 0) {
        var ones = str.repeat(userInput);
        alert(ones)
    } else if
      (userInput > 4 && userInput < 9) {
        var fiveeight = (userInput-5);

        var fives = str.repeat(fiveeight);
        alert("V"+fives)
      };
      // "I".repeat(userInput);
      //   ("I" += "I" + userInput);
      //   userInput++;
        // "I" + "I"
        // var ones = (1*userInput)
        // output += userInput;


    event.preventDefault();
  });
});
