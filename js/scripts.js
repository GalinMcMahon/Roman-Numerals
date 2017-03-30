var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;
var output = [];
var str1 = "I"
var str2 = "X"
var str3 = "C"
var str4 = "M"

$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    var userInput = $("input#numberInput").val();

  //   if (userInput > 3999) {
  //     alert("Please enter an integer less than 4000")
  //
  // }
    // ONE POSITION
      var onePosition = (userInput.slice(-1));
      if (onePosition < 4 && onePosition > 0) {
        var ones = str1.repeat(onePosition);
        // alert(ones)

      } else if
          (onePosition > 4 && onePosition < 9) {
            var fiveeight = (onePosition-5);
            var fives = str1.repeat(fiveeight);
            var ones = ("V"+fives)

      } else if (onePosition == 4) {
          var ones = ("IV")

      } else if (onePosition == 9) {
          var ones = ("IX")
      } else if (onePosition == 0) {
        var ones = ("")
      }
      // } else {
      //   alert("")
      // }

      if (userInput === onePosition) {
        alert (ones)
      } else

      // TEN POSITION
      var twoPosition = (userInput.slice(-2, 1));
      if (twoPosition < 4 && twoPosition > 0) {
        var twos = str2.repeat(twoPosition);
        alert(twos+ones)

    } else if
        (twoPosition > 4 && twoPosition < 9) {
          var fiveeight = (twoPosition-5);
          var fives = str2.repeat(fiveeight);
          var twos = ("L"+fives)
          alert(twos+ones)
    } else if (twoPosition == 4) {
        var twos = ("XL")
        alert(twos+ones)
    } else if (twoPosition == 9) {
        var twos = ("XC")
        alert(twos+ones)
    } else {
      alert("Please enter 1-9")
    }

    if (userInput === twoPosition) {
      alert (twos+ones)
    } else











      // var numberLength = (userInput.length);
      // if (numberLength == 1) {
      //   alert("user input is 1 digit long")
      // } else if (numberLength == 2) {
      //   alert("user input is 2 digits long")
      // }


    event.preventDefault();
  });
});
