"use strict";

const users = [
    {
        firstName: "Justin",
        lastName: "Reich"
    },
    {
        firstName: "Daniel",
        lastName: "Fryar"
    },
    {
        firstName: "Ryan",
        lastName: "Orsinger"
    },
    {
        firstName: "Vivian",
        lastName: "Canalas"
    }];

    /**
     * Refactor this function
     * // @param users
     * // @returns {[]}
     */
const getFullNames = users => {
    let output = [];
    for (let user of users) {
        let user = users[i];
        output.push({
            name: `${user.firstName} ${user.lastName}`
        });
    }
    return output;
}
// const getFullNames = users => users.reduce((accum, { firstName, lastName }) => [...accum, {name: `${firstName} ${lastName}`}], []);
console.log(getFullNames(users));


