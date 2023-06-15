$(document).ready(function() {
    $(".card").on("click", function(event) {
      $(event.target).closest(".card").toggleClass("active");
    });
  });