const audrey = document.getElementById("audrey");


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.onscroll = function() {
    if(document.body.style.height < 50 || document.documentElement.style.height > 50){
        document.getElementById('audrey').style.height = window.scrollY + "60px";
        document.getElementById('audrey').style.width = window.scrollY + "60px";
    }

}
    /*Adjust the width of audrey to be 1/3 the value of
    `window.scrollY`. No lower than 50px, though.*/



    
    /*Adjust the height of audrey to be 1/4 the value of
    `window.scrollY`. No lower than 100px, though.*/
    


//if in is only for searching for the key in a key value pair