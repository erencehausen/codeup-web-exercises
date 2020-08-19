
function queryUser() {
    var usersNum = parseInt(prompt("Please enter an odd number between 1 and 50"));
    console.log(`Number to skip is: ${usersNum}`);
    for (let i = 1; i <= 50; i += 2) {
        if (Number.isInteger(usersNum) !== true) {
            console.log("test");
            break;
        }
        if (i === usersNum) {
            console.log(`Yikes! Skipping number: ${i}`);
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }
}
