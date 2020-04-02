// Back End

var romanNums = ["I", "V", "X", "L", "C", "D", "M"]

var romanFinish = function(numValue) {
  console.log (romanFinish)
}

// Front End

$(document).ready(function(){

  $("form#roman-form").submit(function(event){
    event.preventDefault();
    
    var numValue = ("input#numValue").val();
    console.log (numValue)
    var result = form(submit);
  });
    $("#result").html(result);
    console.log(result)
});