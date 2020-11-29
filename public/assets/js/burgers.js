$(function () {
  $(".form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: false,
    };

    // post request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("A burger was created");
      location.reload();
    });
  });
  $(".devouredOrNot").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: devoured,
    };

    // put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(() => {
      console.log("Burger has been devoured");
      location.reload();
    });
  });
  $(".delete_burger").on("click", function (event) {
    var id = $(this).data("id");

    //send delete request
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
