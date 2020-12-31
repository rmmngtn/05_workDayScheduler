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

    // // get value from html for current hour 
    var blockHour = parseInt($(this).attr("id").split("-")[1]); 
    console.log(blockHour);



// change div timeblock colors depending on time of day
    // check if currentHour > or < blockHour
    // add css classes according to time
    if (currentHour > blockHour) { 
        // div is grey 
        }
    else if (currentHour < blockHour) { 
        // div is green 
    }

    else {
        // current time - div is red
    }




    
    



    




});





/ 
// save user input to local storage 