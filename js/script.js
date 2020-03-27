$(document).ready(function(){
    $("#formOne").submit(function(event) {
        var name = $("#name").val();
        var animal = $("#animal").val();
        var food = $("#food").val();
        var programming = $("input:radio[name=programming]:checked").val();


        if (programming == "no"){
            console.log("cat");

            
         } else {
             console.log("dog")
         }
    
  
  
        console.log(name);
        console.log(animal);
        console.log(food);
        

    $("#formOne").hide();
    event.preventDefault();
    
    
    });
  });