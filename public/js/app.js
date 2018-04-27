$(document).ready(function () {
    // when the form is submitted
    $("#add-user").on("submit", function (e) {
        e.preventDefault();
        var userData = {
            name: $("#name").val().trim(),
            phone: $("#phone").val().trim(),
            address: $("#address").val().trim(),
            // type: $("#type").val(),
            type: $('input[name=type]:checked').val(),
            quantity_in_lbs: $("#quantity_in_lbs").val().trim(),
            pickupStart: $("#pickupStart").val().trim(),
            pickupEnd: $("#pickupEnd").val().trim(),
        };
        console.log(userData);
        // send a POST request to the server
        $.post("/api/users", userData, function (data) {
            location.reload();
        });
    });

    $(".delete-btn").on("click", function(e){
        e.preventDefault();
        var userId = $(this).attr("data-id");
        $.ajax({
            method: "DELETE", 
            url: "/api/user/" + userId
        }).then(function(data){
            location.reload();
        });
    });

    // TODO: Implement an update feature
    $("#update-user").on("submit", function (e) {
        e.preventDefault();
        var userId = $(this).attr("data-id");
        var userData = {
            name: $("#name-update").val().trim(),
            phone: $("#phone-update").val().trim(),
            address: $("#address-update").val().trim(),
            // type: $("#type-update").val(),
            type: $('input[name=type]:checked').val(),
            quantity_in_lbs: $("#quantity_in_lbs-update").val().trim(),
            pickupStart: $("#pickupStart-update").val().trim(),
            pickupEnd: $("#pickupEnd-update").val().trim()
        };
        console.log(userData);
        // send a PUT request to the server
        $.ajax({
            method: "PUT", 
            url: "/api/user/" + userId,
            data: userData
        }).then(function(data){
            window.location.assign("/addUser");
        });
    });

});
