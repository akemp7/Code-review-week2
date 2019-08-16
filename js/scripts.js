$(document).ready(function(){
  $(".quiz").submit(function(event) {

    var goalsInput=$("select#goals").val();
    var experienceInput=$("select#experience").val();
    $(".results").hide();

    if(goalsInput === "I need a place to do statistics!") {
      console.log(alert("#language1"));


    }
  });

});
