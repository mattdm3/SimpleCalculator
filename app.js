const number = document.getElementsByClassName("number");
const display = document.querySelector(".input");
const operator = document.getElementsByClassName("operator");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const division = document.querySelector(".division");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const subtract = document.querySelector(".subtract");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const add = document.querySelector(".add");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");
const equal = document.querySelector(".equal");

// get history value and print number 

function getHistory() {
  return display.innerText;
}

function printHistory(num) {
  display.innerText = num;
}

function getOutput(num) {
  return result.innerText;
}

function printOutput(num) {
  if (num == '') {
    result.innerText = num;
  } else {
    result.innerText = getFormattedNumber(num);
  }

}

function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ''));

}



// get operation values 

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
      // } else if (this.id == "subtract") {
      //   var output = getResult().toString();
      //   if (output) {
      //     output = output.substr(0, output.length - 1);
      //     printResult(output);
      //   }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output != "") {
        output = reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  })
}

//get number values

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  })
}