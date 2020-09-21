"use strict";
let myArray = [34, 23, 56];
function numAvg(usersArray) {
    let average = 0;
    for (let i = 0; i < myArray.length; i++) {
        average += usersArray[i];
    }
    return console.log(average / usersArray.length);
}
numAvg(myArray);