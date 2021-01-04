// load html 
$(document).ready(function () {
    // determine date  
    // using moment.js
    console.log(moment().format("dddd, MMMM Do "))
    // and append to jumbotron
    $("#currentDay").text(moment().format("dddd, MMMM Do "))


    // determine current hour
    // get current number of hours
    var currentHour = moment().hours();
    console.log(currentHour);


    var timeBlock = document.querySelectorAll(".time-block");
    console.log(timeBlock.length);

    // forEach loop over hour blocks
    $(".time-block").each(function () {
        // get value from html for current hour 
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour);


        // change div timeblock colors depending on time of day
        // check if currentHour > or < blockHour
        // add css classes according to time
        if (currentHour > blockHour) {
            // testing that my loop is working
            console.log("div is grey");
            $(this).addClass("past");

        }
        else if (currentHour < blockHour) {
            // testing that my loop is working
            console.log("div is green");
            $(this).addClass("future");
        }

        else {
            // testing that my loop is working
            console.log("div is red");
            $(this).addClass("present");

        }

    });
    

});


















 