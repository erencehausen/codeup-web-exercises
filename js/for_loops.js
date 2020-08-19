function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnMultiplicationTable(input) {
    var msgContainer = '';
    for (let i = 1; i < 11; i++) {
        let a = input + " x " + i + " = " + (input * i) + "\n";
        msgContainer += a;
    }
    return msgContainer;
}
function returnEvenOddMessage(input) {
    if (!Number.isInteger(input)) return input + " is invalid";
    if (input % 2 === 0) return input + " is even";
    return input + " is odd";
}
function returnTenEvenOddMessages() {
    for (let i = 1; i <= 10; i++) {
        console.log(returnEvenOddMessage(randomInt(20, 200)));
    }
}
function returnNumberSail() {
    let msgContainer = ''
    for(let i = 1; i < 10; i++) {
        let j = i.toString();
        msgContainer = j.repeat(i);
        if (i < 9) msgContainer += '\n';
    }
}
function countDownByFives() {
    let output = '';
    for (let i = 100; i > 0; i--) {
        output += i
        if(i > 5) output += '\n';
    }
}