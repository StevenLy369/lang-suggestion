$(document).ready(function(){
    $("#formOne").submit(function(event) {
        var name = $("#name").val();
        var animal = $("#animal").val();
        var food = $("#food").val();
        var programming = $("input:radio[name=programming]:checked").val();
        var romantic =$("input:radio[name=romantic]:checked").val();
        // var results = $(name + ", You should try out:")


        if (programming === "no"){
            $("#formOne").fadeOut();
            $("#nothing").show();
            $("#errorForm").hide();
            

        }else if ((programming === undefined || romantic === undefined || name == "")) {
            alert("Please select all options");
            $("#errorForm").show();

       } else if (animal == "Snakes") {
            $("#python").show();
            $("#formOne").fadeOut();
            var results = (name + ", You should try out:")
            $(".playerName").text(results);
            $("#errorForm").hide();
        
            
        }else if ((animal == "Llamas" && romantic == "yes")  && (food == "Taco Bell" || food == "Pizza") ){
            $("#javascript").show();
            $("#formOne").fadeOut();
            var results = (name + ", You should try out:")
            $(".playerName").text(results);
            $("#errorForm").hide();

        }else if ((animal == "Cats" && romantic == "no") && (food == "McDonalds" || food =="Taco Bell" )){
            $("#c").show();
            $("#formOne").fadeOut();
            var results = (name + ", You should try out:")
            $(".playerName").text(results);
            $("#errorForm").hide();

        }else {
            $("#swift").show();
            $("#formOne").fadeOut();
            var results = (name + ", You should try out:")
            $(".playerName").text(results);
            $("#errorForm").hide();
        }

    // $("#formOne").fadeOut();
    event.preventDefault();
    
    
    });
  });