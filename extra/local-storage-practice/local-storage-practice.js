const userInput = prompt("enter something");
let anObject = [
    {key1: 1, key2: 'a'},
    {key1: 2, key2: 'b'},
    {key1: 3, key2: 'c'},
    {key1: 4, key2: 'd'},
];

localStorage.setItem('anObject', JSON.stringify(anObject));
var retrievedObject = JSON.parse(localStorage.getItem('testObject'));

