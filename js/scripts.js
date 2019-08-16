$(document).ready(function(){
  $(".quiz").submit(function(event) {
    var name = $("input#validationServer01").val();
    var goalsInput= $("select#goals").val();
    var experienceInput= $("select#experience").val();
    var movieInput= $("select#movie").val();
    var liveInput = $("select#live").val();
    var pirateInput = $("pirates").val();
    $(".results").hide();
    $(".name").text(name);

      if(goalsInput === "General Knowledge" && experienceInput === "Beginner"){
          $("#language1").show();
        }

      if (movieInput === "Life of Brian" || liveInput === "Rainforest"){
        $("#language1").show();
      } else if (goalsInput === "Statistics" || movieInput === "Jaws" || pirateInput === "pirate") {
        $("#language3").show();
      } else if (goalsInput === "Develop large, complex software" && experienceInput === "Advanced" || liveInput === "Space" || pirateInput === "A scholarly bear")
        $("#language2").show();

    // if(goalsInput === "General Learning") {
    //   if(experienceInput === "Beginner") {
    //     $("#language1").show();
    //   }
    // }
      event.preventDefault();
  });

});
