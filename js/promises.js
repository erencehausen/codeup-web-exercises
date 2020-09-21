
const fetchGithubUser = fetch('https://api.github.com/users/erencehausen/events/public', {headers: {'Authorization': 'token ae8b20ac8b28968d7085bf91c1d9b57ae80e9f12'}})
    .then(res =>  {
        console.log(res)
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));



const githubUserPromise = new Promise((resolve, reject) => {
    setTimeout( function() {
        resolve("Success")
    }, 250)
});

githubUserPromise.then((message) => {
    console.log(message)
});

