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



    // LEFT TO DO!
    // add to local storage
    // render from local storage on refresh
    
    
    
    // saves data to be used in localStorage
    $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id");
    
     
    localStorage.setItem(time, text);
    
    }); 

    // get everything from local storage and update page 
    

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    

    

});
    




















