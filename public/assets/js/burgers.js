$(function() {
  var audio = document.getElementById("myAudio"); 

  $(".change-burger").on("click", function(event) {
    audio.play();
    if(audio.currentTime===0){
      audio.play();
      var id = $(this).data("id");
      var newBurger= $(this).data("newburger");
      var newBurgerState = {
        devoured: 1
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed devour to", newBurger);
        }
      );
    }
  });

  audio.onended = function() {
    location.reload(); 
  };
      
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
  