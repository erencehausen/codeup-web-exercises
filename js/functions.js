"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// var userName = prompt('What is your name?');
function sayHello(name) {
    // userName = console.log(`Hello, ${name}`);
    return console.log(`Hello, ${name}`); //userName
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello('Eric');

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
var myName = 'Eric';
sayHello(myName);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 */
function isTwo(num) {
    if (num === 2) return true;
    if (num !== 2) return false;
}
 // Example
 console.log(isTwo(1)); // returns false
 console.log(isTwo(2)); // returns true
 console.log(isTwo(3)); // returns false

 /**
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
 isTwo(random);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 */
 function calculateTip(tipPercentage, totalBill) {
    var tipResult = tipPercentage * totalBill;
    tipResult = console.log(`Tip = $${tipResult}`);
    return tipResult;
}
// Examples:
calculateTip(0.20, 20) // returns 4
calculateTip(0.25, 25.50) // returns 6.375
calculateTip(0.15, 33.42) // returns 5.013

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var bill = 20;
var tipPrompt = prompt(`Your bill total is $${bill}. Please enter a tip percentage.`);
var tipAlert = alert(`You tipped $${calculateTip(tipPrompt, bill)}.`);


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 */
function applyDiscount(priceBeforeDiscount, discountPercentage) {
    // var discount = ((100 - discountPercentage)/100)*priceBeforeDiscount; //converts integers into floats
    var discount = (1 - discountPercentage) * priceBeforeDiscount;
    discount = console.log(`$${discount}`);
    return discount;
}

 // Example:
 var originalPrice = 100;
 var dicountPercent = .2; // 20%
 applyDiscount(originalPrice, dicountPercent) // 80
 applyDiscount(45.99, 0.12) // 40.4712


