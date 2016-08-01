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
