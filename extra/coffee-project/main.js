"use strict"
function renderCoffee(coffee,arrayLength) {
    // var html = '<div class="coffee d-flex justify-content-center align-items-center col-lg-6 col-sm-12">';
    //TODO Maybe suggest coffee based on button click
    var html ='';
    if (arrayLength === 1){
        html += '<button type="button" class="coffee btn btn-outline-light d-flex justify-content-center align-items-center col-lg-12 col-sm-12">';
    } else {
        html += '<button type="button" class="coffee btn btn-outline-light d-flex justify-content-center align-items-center col-lg-6 col-sm-12">';
    }
        html += '<h4>' + coffee.name + '</h4> ';
        html += '<p id="roastText">(' + coffee.roast + ')</p>';
        html += '</button>';
    return html;
}
function renderCoffeeList(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i],coffees.length);
    }
    console.log(coffees.length);
    return html;
}
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var searchBar = usersChoice.value;
    var filteredCoffees = [];
    if(selectedRoast === "All"){
        filteredCoffees = coffees;
    }else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        })
    }
    tbody.innerHTML = renderCoffeeList(filteredCoffees);
    var searchCoffees = filteredCoffees.filter(function(e) {
        return (e.name.toLowerCase().includes(searchBar));
    });
    if (searchCoffees.length < filteredCoffees.length){
        tbody.innerHTML =  renderCoffeeList(searchCoffees);
    }
    console.log(searchCoffees);
}
function validateSubmission(e){
    e.preventDefault();
    var submittedRoast = newCoffeeRoastLevel.value;
    var submittedName = newCoffeeName.value.toLowerCase();
    var redundancyCheck = [];
    //Check for empty string submission
    while (submittedName === " " || submittedName === '') {
        let name = prompt("Looks like you haven't given this new brew a name. What would you like to call it?");
        submittedName = name.toLowerCase();
    }
    //Check for pre-existing name and roast combination
    //Narrow current coffee list down to submitted roast
    coffees.forEach(function(coffee) {
        if (coffee.roast === submittedRoast) {
            redundancyCheck.push(coffee.name.toLowerCase());
        }
    })
    console.log(redundancyCheck);
    //Check for name match in the truncated list of coffees
    let checkName = redundancyCheck.includes(submittedName)
    if(checkName){
        alert("Looks like we already have that combination of coffee and roast level in our inventory.\nPerhaps you'd like to give your brew a different name and resubmit?")
    }else{
        addNewCoffee(submittedRoast, submittedName);
    }
}
function addNewCoffee(selectedRoast, blend){
    //Capitalize the new  coffee's blend name
    let newBlend = blend.replace(/\w\S*/g, function(txt)
    {
        if (txt.match(/^(e|y|de|lo|los|la|las|do|dos|da|das|del|van|von|bin|le)$/gi)) return txt.toLowerCase();
        else return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    //Simpler version of above
    //capitalize_Words
    // function capitalize_Words(str)
    // {
    //     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    // }
    //Find where to insert the new coffee into the coffees array based on roast
    let insetPoint = -1;
    do {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                insetPoint = coffees.indexOf(coffee) + 1;
            }
        })
    }while(insetPoint === -1)
    //Format new coffee for inclusion into the coffees array
    let newCoffee = {id: coffees.length+1, name: newBlend, roast: selectedRoast}
    //Add new coffee to inventory (coffees array)
    coffees.splice(insetPoint, 0, newCoffee)
    alert("Congratulations! You have added " + newBlend + " to our selection of " + selectedRoast + " roasts.");
    tbody.innerHTML = renderCoffeeList(coffees)
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var usersChoice = document.getElementById('usersChoice');
var newCoffeeSubmission = document.getElementById('newCoffeeRequest');
tbody.innerHTML = renderCoffeeList(coffees);
roastSelection.addEventListener('input', updateCoffees);
usersChoice.onkeyup = updateCoffees;
newCoffeeSubmission.addEventListener('click', validateSubmission);