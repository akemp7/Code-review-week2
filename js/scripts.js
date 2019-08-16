$(document).ready(function(){

  $("#panel").hide();
  $("#flip").click(function(){
    $("#panel").slideToggle();
  });

  $(".quiz").submit(function(event) {
    var name = $("input#validationServer01").val();
    var goalsInput= $("select#goals").val();
    var experienceInput= $("select#experience").val();
    var movieInput= $("select#movie").val();
    var liveInput = $("select#live").val();
    var egoInput = $("select#alterego").val();

    $(".results").hide();
    $(".name").text(name);

      if (goalsInput === "Select from below" || experienceInput === "Select from below" || movieInput === "Select from below" || liveInput === "Select from below" || egoInput === "Select from below"){
        $("#no").fadeToggle();
      } else {
        if(goalsInput === "General Knowledge" || experienceInput === "Beginner" || movieInput === "Life of Brian" || egoInput === "ninja"){
          $("#language1").fadeToggle(1000);
          $("#language1").click(function(){
            $("p").fadeOut();
            $("img").fadeOut();
          });
        } else if (goalsInput === "Statistics" || egoInput === "pirate" || experienceInput === "Intermediate") {
          $("#language3").fadeToggle(1000);
          $("#language3").click(function(){
            $("p").fadeOut();
            $("img").fadeOut();
          });
        } else if (goalsInput === "Develop large, complex software" || experienceInput === "Advanced" || liveInput === "Space" || egoInput === "A scholarly gopher")
          $("#language2").fadeToggle(1000);
          $("#language2").click(function(){
            $("p").fadeOut();
            $("img").fadeOut();
          });
        }
        event.preventDefault();
        });
  });
