// Back End

var romanNums = ["I", "V", "X", "L", "C", "D", "M"]

var romanFinish = function(romanOne) {
  var inputNumber = romanOne.toString();
  var outputNumber = inputNumber.map(function(thirdNumber){
 
  })
}
console.log(romanOne)
// Front End

$(document).ready(function(){
  $("form#roman-form").submit(function(event){
    event.preventDefault();
    
    var romanOne = $("input#numValue").val();
    
    $("#result").html(result);
  });
   
});

