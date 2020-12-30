// load html 
$(document).ready(function() {
    // determine date  
    // using moment.js
    console.log(moment().format("dddd, MMMM Do "))
    // and append to jumbotron
    $("#currentDay").text(moment().format("dddd, MMMM Do "))



   

    // determine current hour
    // get current number of hours
    var currentHour = moment().hours(); 
    console.log(currentHour)


    // forEach loop over hour blocks

    // get value from html for current hour 
    var blockHour = parseInt($(this).attr("id").split("-")[1]); 

    // check if currentHour > or < blockHour
    // add css classes according to time




});




// change div timeblock colors depending on time of day
// past hours grey, present hour red, future hours green 
// save user input to local storage 