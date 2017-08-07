$(document).ready(function() {

    // select all of the list item elements and change the text to 'cubs stink' using the .text() method
    $("li").text("cubs stink");

    // select the element that has an id of 'header' and output the html content of the element to the console using the .html() method
    console.log($("#header").html());

    // select all of the elements that have a className of 'link' and output the total number of selected items to the console
    console.log($(".link").length);

    // select all of the td elements inside of tr tags with a className of 'odd'. Add a class to the td tags named 'oddColumn'
    $("tr.odd td").addClass("oddColumn");


})
