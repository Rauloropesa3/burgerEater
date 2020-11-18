$(function(){
    $(".change-devour").on("click", function(event){
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");
        const newDevourState = {devoured: newDevour,};

        // put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState,
        }).then(function(){
            console.log("Burger has been devoured");
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0,
        };

        // post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function() {
            console.log("A burger was created");
            location.reload();
        });
    });
});