(function(){
    "use strict";

    //TODO Create an array of 4 people's names and store it in a variable called 'names'.
    var names = ["Brandi", "Justin", "Ryan", "Angela"];

    //TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names);

    //TODO: Create log statements that will print each of the names individually by accessing each element's index.
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /*
     * Review Notes:
     * Could also use but it is bad practice.
     * console.log(names[0], names[1], names[2], names[3])
     */

    //TODO: Write some code that uses a for loop to log every item in the names array.
    for(let i = 0; i < names.length; i++){
        console.log(names[i]);
    }
    /*
     * Review Notes:
     * Could also use code below.
     * for(var i = names.length - 1; i > 0; i--){
     *     console.log(names);
     * }
     */

    //TODO: Refactor your above code to use a `forEach` loop
    names.forEach(function (names){
        console.log(`Here are some names: ${names}`)
    });
    /*
     * Review Notes:
     * Could also use code below.
     * var logSomething = function(something){
     *     console.log(something);
     * }
     * names.forEach(logSomething);
     */

    /*
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(userArray) {
        return userArray[0];
    }
    function second(userArray) {
        return userArray[1];
    }
    function last(userArray) {
        return userArray[userArray.length - 1];
    }
    /*
     * Review Notes:
     * Could also store function in variables.
     * var first = function(userArray){
     *     return userArray[0];
     * }
     */
    first([1, 2, 3, 4, 5]); // returns 1
    second([1, 2, 3, 4, 5]); // returns 2
    last([1, 2, 3, 4, 5]); // return 5
})();