var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;
var output = [];



$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    var userInput = $("input#numberInput").val();

    if (userInput > 3999) {
      alert("Please enter an integer less than 4000")

  } else {
      // alert("Thanks")
      }

    if (userInput < 4 && userInput > 0) {
      var str = "I"
      var outputted = str.repeat(userInput);
      alert(outputted)
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
