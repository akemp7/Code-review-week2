$(document).ready(function(){
  $(".quiz").submit(function(event) {
    var goalsInput=$("select#goals").val();
    var experienceInput=$("select#experience").val();
    $(".results").hide();
    $("#validationServer01").removeClass("is-invalid");

    if(goalsInput === "General Learning") {
      if(experienceInput === "Beginner") {
        $("#language1").show();
      }
    }
      event.preventDefault();
  });

});
