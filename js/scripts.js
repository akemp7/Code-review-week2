$(document).ready(function(){
  $(".quiz").submit(function(event) {
    var name = $("input#validationServer01").val();
    var goalsInput=$("select#goals").val();
    var experienceInput=$("select#experience").val();
    $(".results").hide();
    $(".name").text(name);

    if(goalsInput === "General Learning") {
      if(experienceInput === "Beginner") {
        $("#language1").show();
      }
    }
      event.preventDefault();
  });

});
