(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator() {}


Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(num1, num2) {
  return (num1+num2);
};

Calculator.prototype.subtract = function(num1, num2) {
  return num1 - num2;
};

Calculator.prototype.multiply = function(num1, num2) {
  return num1*num2;
};

Calculator.prototype.divide = function(num1, num2) {
  return num1/num2;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(event) {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    $("#solution").empty();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $(".calculator-button").click(function(event) {
    event.preventDefault();
    $("#solution").empty();
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var calculationType = $(this).attr("value");
    var simpleCalculator = new Calculator();
    var output;
    switch(calculationType) {
      case "add":
        output = simpleCalculator.add(num1, num2);
        break;
      case "subtract":
        output = simpleCalculator.subtract(num1, num2);
        break;
      case "multiply":
        output = simpleCalculator.multiply(num1, num2);
        break;
      case "divide":
        output = simpleCalculator.divide(num1, num2);
        break;
      default:
        output = 0;
    }
    $('#solution').append("<li>" + output + "</li>");
  });

  // $("#sub").click(function(event){
  //   event.preventDefault();
  //   $("#solution").empty();
  //   var num1 = parseInt($("#num1").val());
  //   var num2 = parseInt($("#num2").val());
  //   var simpleCalculator = new Calculator();
  //   var output = simpleCalculator.subtract(num1, num2);
  //   $('#solution').append("<li>" + output + "</li>");
  // });
  //
  // $("#mult").click(function(event){
  //   event.preventDefault();
  //   $("#solution").empty();
  //   var num1 = parseInt($("#num1").val());
  //   var num2 = parseInt($("#num2").val());
  //   var simpleCalculator = new Calculator();
  //   var output = simpleCalculator.multiply(num1, num2);
  //   $('#solution').append("<li>" + output + "</li>");
  // });
  //
  // $("#divide").click(function(event){
  //   event.preventDefault();
  //   $("#solution").empty();
  //   var num1 = parseInt($("#num1").val());
  //   var num2 = parseInt($("#num2").val());
  //   var simpleCalculator = new Calculator();
  //   var output = simpleCalculator.divide(num1, num2);
  //   $('#solution').append("<li>" + output + "</li>");
  // });
});


$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
