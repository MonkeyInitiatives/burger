// Make sure we wait to attach our handlers until the DOM is fully loaded.
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

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed sleep to", newBurger);
          // Reload the page to get the updated list
        }
      );
    }
  });

  audio.onended = function() {
    location.reload(); 
  };
      
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
  