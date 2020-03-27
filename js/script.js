$(document).ready(function(){
    $("#formOne").submit(function(event) {
        var name = $("#name").val();
        var animal = $("#animal").val();
        var food = $("#food").val();
        var programming = $("input:radio[name=programming]:checked").val();
        var romantic =$("input:radio[name=romantic]:checked").val();


        if (programming == "no"){
            $("#formOne").fadeOut();
            $("#nothing").show();
            

            
         } else if (animal == "Snakes") {
             $("#python").show();
             $("#formOne").fadeOut();
             
            
         }else if ((animal == "Llama" || romantic == "yes")  && (food == "Taco Bell" || food == "Pizza") ){
            $("#formOne").fadeOut();
            $("#javascript").show();

        }else if ((animal == "Cats" || romantic == "no") && (food == "McDonalds" || food =="Taco Bell" )){
            $("#formOne").fadeOut();
            $("#c").show();

        }else if ((programming == undefined)) {
            alert("Please refresh and select all options");
    

            
        }else {
            $("#swift").show();
            $("#formOne").fadeOut();
        }
    
  
  
        console.log(programming);

    // $("#formOne").fadeOut();
    event.preventDefault();
    
    
    });
  });