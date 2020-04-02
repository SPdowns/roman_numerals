// Back End

var romanNums = ["I", "V", "X", "L", "C", "D", "M"]
var numberNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var romanOne = $("input#numValue").val();
// var romanFinish = function(romanOne) {
//   var inputNumber = romanOne.split();
// }
// console.log(romanOne)
// Front End

$(document).ready(function(){
  $("form#roman-form").submit(function(event){
    event.preventDefault();
    
    
    
    $("#result").html(romanOne);
  });
   
});

