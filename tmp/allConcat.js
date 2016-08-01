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

  $("#addition-form").submit(function(event) {
    event.preventDefault();
    $("#solution").empty();
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.add(num1, num2);
    $('#solution').append("<li>" + output + "</li>");
  });
});


$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
