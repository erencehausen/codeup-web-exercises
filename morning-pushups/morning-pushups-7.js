"use strict"
const divs = document.querySelectorAll("div")
const fullName = {lName: "smith"}
const upperCase = (input) => {
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
    return input;
}
for(let i = 0;  i< divs.length; i++){

    divs[i].innerText = `${upperCase(divs[i].innerText)} ${upperCase(fullName.lName)}\n`;
}