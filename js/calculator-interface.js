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

  $("#add").click(function(event) {
    event.preventDefault();
    $("#solution").empty();
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.add(num1, num2);
    $('#solution').append("<li>" + output + "</li>");
  });

  $("#sub").click(function(event){
    event.preventDefault();
    $("#solution").empty();
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.subtract(num1, num2);
    $('#solution').append("<li>" + output + "</li>");
  });
});
