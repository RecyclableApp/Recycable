$(document).ready(function () {
    // when the form is submitted
    $("#add-student").on("submit", function (e) {
        e.preventDefault();
        var studentData = {
            name: $("#name").val().trim(),
            phone: $("#phone").val().trim(),
            address: $("#address").val().trim(),
            type: $("#type").val().trim(),
            quantity_in_lbs: $("#quantity_in_lbs").val().trim(),
            pickupStart: $("#pickupStart").val().trim(),
            pickupEnd: $("#pickupEnd").val().trim(),
        };
        console.log(studentData);
        // send a POST request to the server
        $.post("/api/students", studentData, function (data) {
            location.reload();
        });
    });

    $(".delete-btn").on("click", function(e){
        e.preventDefault();
        var studentId = $(this).attr("data-id");
        $.ajax({
            method: "DELETE", 
            url: "/api/student/" + studentId
        }).then(function(data){
            location.reload();
        });
    });

    // TODO: Implement an update feature
    $("#update-student").on("submit", function (e) {
        e.preventDefault();
        var studentId = $(this).attr("data-id");
        var studentData = {
            name: $("#name-update").val().trim(),
            phone: $("#phone-update").val().trim(),
            address: $("#address-update").val().trim(),
            type: $("#type-update").val().trim(),
            quantity_in_lbs: $("#quantity_in_lbs-update").val().trim(),
            pickupStart: $("#pickupStart-update").val().trim(),
            pickupEnd: $("#pickupEnd-update").val().trim(),
            // name: $("#name-update").val(),
            // phone: $("#phone-update").val(),
            // address: $("#address-update").val(),
            // type: $("#type-update").val(),
            // quantity_in_lbs: $("#quantity_in_lbs-update").val(),
            // pickupStart: $("#pickupStart-update").val(),
            // pickupEnd: $("#pickupEnd-update").val(),
        };
        console.log(studentData);
        // send a PUT request to the server
        $.ajax({
            method: "PUT", 
            url: "/api/student/" + studentId,
            data: studentData
        }).then(function(data){
            window.location.assign("/");
        });
    });

});
