$(document).ready(function(){
    $("#formOne").submit(function(event) {
        var name = $("#name").val();
        var animal = $("#animal").val();
        var food = $("#food").val();
        var programming = $("input:radio[name=programming]:checked").val();


        if (programming == "no"){
            $("#nothing").show();

            
         } else {
             $("#javascript").show();
             console.log("javascript");
         }
    
  
  
        

    $("#formOne").hide();
    event.preventDefault();
    
    
    });
  });