// Back End

var romanNums = ["I", "V", "X", "L", "C", "D", "M"]
var romanOne = $("input#numValue").val();
var inputNumber = romanOne

var romanFinish = function(romanOne) {
  
  var outputNumber = inputNumber
  return outputNumber
  
}
console.log(romanFinish)
// Front End

$(document).ready(function(){
  $("form#roman-form").submit(function(event){
    event.preventDefault();
    
    
    
    $("#result").html(result);
  });
   
});

