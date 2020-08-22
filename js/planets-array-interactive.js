let planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];
let frontOrBack;
let usersInput;
let beforePlanetChange = planets;
function planetsArray() {
    var usersChoices = prompt('Please enter your choice as one of the' +
        ' options below:\n' +
        'add         - to add to the list of planets.\n' +
        'remove   - to remove one of the planets on the list\n' +
        'find         - to find a planet in the list\n' +
        'reverse   - to reverse the order of the list of planets\n' +
        'sort         - to sort the list of planets alphabetically\n\n' +
        'Planets: ' + planets.join(', '));
    planets.slice('');
    // TODO: reformat if's below to a switch
    // if (usersChoices.toLowerCase() === 'add') return addPlanets(usersChoices);
    // if (usersChoices.toLowerCase() === 'remove') return removePlanets(usersChoices);
    // if (usersChoices.toLowerCase() === 'find') return findPlanets(usersChoices);
    // if (usersChoices.toLowerCase() === 'reverse') return reversePlanets(usersChoices);
    // if (usersChoices.toLowerCase() === 'sort') return sortPlanets(usersChoices);

    // TODO: Program is resuming code after user inputs teh cancel button
    //  (null) solve it!

    if (typeof usersChoices !== 'string') return console.log('test');
    switch (usersChoices.toLowerCase()) {
        case 'add':
            addPlanets(usersChoices);
            break;
        case 'remove':
            removePlanets(usersChoices);
            break;
        case 'find':
            findPlanets(usersChoices);
            break;
        case 'reverse':
            reversePlanets(usersChoices);
            break;
        case 'sort':
            sortPlanets(usersChoices);
            break;
        default:
            alert("That is an invalid answer. Please try again.");
            planetsArray();
            break;
    }
}
function returnAction() {
    var returnMessage = confirm("Would you like to return to main menu?");
    if (returnMessage === true) return planetsArray();
}
function addPlanets() {
    usersInput = prompt('What planet would you like to add?');
    frontOrBack = prompt(`Do you want to add ${usersInput} to the front or the back of the list?`);
    // if (frontOrBack.toLowerCase() === "front") {planets.unshift(usersInput)}
    // if (frontOrBack.toLowerCase() === "back") {planets.push(usersInput)}
    if (frontOrBack === null) return false;
    switch (frontOrBack.toLowerCase()){
        case 'front':
            planets.unshift(usersInput);
            alert(`The planet list now looks like this:\n${planets}\n\nIt use to look like this:\n${beforePlanetChange}`);
            beforePlanetChange = planets;
            returnAction();
            break;
        case 'back':
            planets.push(usersInput);
            alert(`The planet list now looks like this:\n${planets}\n\nIt use to look like this:\n${beforePlanetChange}`);
            beforePlanetChange = planets;
            returnAction();
            break;
        default:
            alert("That is an invalid answer. Please try again.");
            planetsArray();
            break;
    }
    return console.log("addPlanets");
}
function removePlanets() {
    return console.log("removePlanets");
}
function findPlanets() {
    return console.log("findPlanets");
}
function reversePlanets() {
    return console.log("reversePlanets");
}
function sortPlanets() {
    return console.log("sortPlanets");
}
planetsArray();