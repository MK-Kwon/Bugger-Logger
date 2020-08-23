$(function() {
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        let newBurger = {
            burgerName: $("#burger").val().trim(),
            devoured: false
        };
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created a new burger");
            location.reload();
        });
    });

    $(".devour").on("click", function(){
        let id = $(this).data("id");
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: {
                burgerid: id
            }
        }).then(function(){
            location.reload();
        });
    });

    $(".delete").on("click", function(){
        event.preventDefault();
        let id = $(this).data("id");
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function() {
            location.reload();
        });
    });
});

