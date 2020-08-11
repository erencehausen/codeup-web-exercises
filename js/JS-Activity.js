"use strict";
var username;
var password;

function userCreds() {
    username = prompt('Please enter your username: ');
    password = prompt('Please enter your password: ');
}

function testCheck(user, pass) {
    if (pass.length >= 5) return console.log("1");
    if (user !== '') return console.log("2");
    if (user.length < 20) return console.log("3");
    // FIX: code below detects space at end of string but not beginning.
    if (user.indexOf(' ') <= 0) return console.log("4");
}

userCreds();
testCheck(username, password);