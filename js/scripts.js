$(document).ready(function(){
  $(".quiz").submit(function(event) {
    var name = $("input#validationServer01").val();
    var goalsInput= $("select#goals").val();
    var experienceInput= $("select#experience").val();
    var movieInput= $("select#movie").val();
    var liveInput = $("select#live").val();
    var pirateInput = $("select#pirates").val();
    $(".results").hide();
    $(".name").text(name);


      if(goalsInput === "General Knowledge" && experienceInput === "Beginner" || movieInput === "Life of Brian" || pirateInput === "ninja"){
        $("#language1").fadeToggle(1000);
        $("#language1").click(function(){
          $("p").fadeOut();
          $("img").fadeOut();
        });

      } else if (goalsInput === "Statistics" || pirateInput === "pirate" || experienceInput === "Intermediate") {
        $("#language3").fadeToggle(1000);
        $("#language3").click(function(){
          $("p").fadeOut();
          $("img").fadeOut();
        });
      } else if (goalsInput === "Develop large, complex software" && experienceInput === "Advanced" || liveInput === "Space" || pirateInput === "A scholarly bear")
        $("#language2").fadeToggle(1000);
        $("#language2").click(function(){
          $("p").fadeOut();
          $("img").fadeOut();
        });

      event.preventDefault();
  });

});
