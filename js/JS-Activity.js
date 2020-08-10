"use strict";

var username = ' codeup';
var password = 'notastrongpassword';

if (password.length >= 5) {console.log("1")};
if (username !== '') {console.log("2")};
if (username.length < 20) {console.log("3")};
// FIX: code below detects space at end of string but not beginning.
if (username.indexOf(' ') <= 0) {console.log("4")};