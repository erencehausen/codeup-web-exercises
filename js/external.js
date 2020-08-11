"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
var favoriteColor = prompt("What is your favorite color?");
alert(`${favoriteColor} is my favorite color too!`);

var littleMermaid = prompt("How many days do you want to rent The little mermaid for?");
var brotherBear = prompt("How many days do you want to rent Brother Bear for?");
var hercules = prompt("How many days do you want to rent Hercules for?");
var totalMovieRent = (+littleMermaid + +brotherBear + +hercules) * 3;
alert(`Your total cost is $${totalMovieRent}`);

const GOOGLE_RATE = 400;
const AMAZON_RATE = 380;
const FACEBOOK_RATE = 350;
var google = prompt("How many hours did you work for Google this week?");
var amazon = prompt("How many hours did you work for Amazon this week?");
var facebook = prompt("How many hours did you work for Facebook this week?");
var totalIncome = (google * GOOGLE_RATE) + (amazon * AMAZON_RATE) + (facebook * FACEBOOK_RATE);
alert(`Your income for this week is $${totalIncome}`);

var classCapacity = 30;
var registerStudent = 20;
var classConflicts = true;
var canEnroll = (classCapacity > registerStudent) && !classConflicts;
alert("Student able to register for class")

const PREMIUM_USER = true;
var user;
// user = PREMIUM_USER;
var customerItem = prompt("How many items would you like to purchase?");
if (user === PREMIUM_USER) {
    alert(`Product offer has been applied`);
} else {
    if (customerItem >= 2 && customerItem === true) {
        alert(`Product offer has been applied`);
    }
}

