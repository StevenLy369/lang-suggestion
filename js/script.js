$(document).ready(function(){
    $("#formOne").submit(function(event) {
        var name = $("#name").val();
        var animal = $("#animal").val();
    
  
  
    event.preventDefault();
    console.log(name);
    console.log(animal);
    });
  });