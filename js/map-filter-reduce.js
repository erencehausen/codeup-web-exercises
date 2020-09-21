"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.table(users)

// 1
const usersLanguages = users.filter( ({ languages } ) => languages) //
console.log(usersLanguages)

// 2
const usersEmails = users.map( ({email}) => email )
console.log(usersEmails)

// 3
const usersTotalYears = users.reduce((accum, {yearsOfExperience}) => (accum + yearsOfExperience), 0)
console.log(usersTotalYears/users.length)

// 4
const longestEmail = users.reduce((accum, {email}) => {
    return (email.length > accum.length) ? email : accum;
}, '')
console.log(longestEmail)

// 5
const usersName = users.reduce((accum, {name}) => {
    console.log(name)
}, '')




