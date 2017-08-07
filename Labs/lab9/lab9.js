$(document).ready(function() {

    //cubs stink button
    var clickMe = $("<input>").val("click me").attr("type", "button").on("click", function() {

        console.log("cubs stink");

    });

    $("body").append(clickMe);

    //.event() version
    // $("li").mouseover(function() {
    //
    //     $(this).css("background-color", "yellow");
    //
    // }).mouseout( function() {
    //
    //     $(this).css("background-color", "white");
    //
    // });

    //.on() version
    $("#toDoList").on("mouseover", "li", function() {

        $(this).css("background-color", "yellow");

    }).on("mouseout", "li", function() {

        $(this).css("background-color", "white");

    });

    //events for this item will still work
    var newItem = $("<li>").text("walk the dog");

    $("#toDoList").append(newItem);

    //Turn off events for list items when button clicked
    var newButton = $("<input>").val("remove mouse events").attr("type", "button").on("click", function() {

        $("#toDoList").off("mouseover", "li").off("mouseout", "li");

    });

    $("body").append(newButton);

})
