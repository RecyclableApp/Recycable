$(document).ready(function () {
    // when the form is submitted
    $("#add-student").on("submit", function (e) {
        e.preventDefault();
        var studentData = {
            name: $("#name").val().trim(),
            GPA: $("#GPA").val().trim()
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
            GPA: $("#GPA-update").val().trim()
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
