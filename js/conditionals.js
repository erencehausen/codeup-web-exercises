"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 */
 function analyzeColor(colorName) {
     colorName = prompt("What is your favorite color");
     switch (colorName) {
         case "blue":
             alert("blue is the color of the sky");
             break;
         case "red":
             alert("Strawberries are red");
             break;
         case "cyan":
             alert("I don't know anything about cyan");
             break;
         default:
             alert("No");
             break;
     }
}

//console.log(analyzeColor('blue')); // returns "blue is the color of the sky"
//console.log(analyzeColor('red')); // returns "Strawberries are red"
//console.log(analyzeColor('cyan')); // returns "I don't know anything about cyan"
 /**
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(customersLuckyNumber, totalAmount) {
    alert(`Your luck number is ${customersLuckyNumber}`);
    function calcDiscount(discount){return totalAmount * (1 - discount)}
    function totalAmountMessage(){return alert(`Your total amount is $${totalAmount.toFixed(2)}. Thank you for shopping with us!`)}
    switch (customersLuckyNumber) {
        case 5:
            calcDiscount(1);
            console.log("Congratulations! All of your items are free!");
            break;
        case 4:
            calcDiscount(0.5);
            totalAmountMessage();
            break;
        case 3:
            calcDiscount(0.35);
            totalAmountMessage();
            break;
        case 2:
            calcDiscount(0.25);
            totalAmountMessage();
            break;
        case 1:
            calcDiscount(0.1);
            totalAmountMessage();
            break;
        case 0:
            calcDiscount(0);
            totalAmountMessage();
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What is your total bill?")
calculateTotal(luckyNumber, totalBill);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var numberMessage = confirm("Would you like to enter a number?");
if (numberMessage === true) {
    var userNumber = parseInt(prompt("Please enter a number."));
}
function userNumberCheck(number) {
    if (isNaN(number)) {
        while (isNaN(number)) {
            number = prompt("That's not a number. Please enter a number.");
        }
    }
    var evenOrOdd = (number % 2 === 0) ? "Your number is even" : "Your number is odd";
    var plusOneHundred = number + 100;
    var positiveOrNegative = (number > 0) ? "Your number is a positive number" : "Your number is a negative number";
    var count = [evenOrOdd, plusOneHundred, positiveOrNegative];
    for (let i = 0; i < count.length; i++) {
        alert(count[i]);
    }
}
userNumberCheck(userNumber);



