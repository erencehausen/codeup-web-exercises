
const fetchGithubUser = fetch('https://api.github.com/users/erencehausen/events/public', {headers: {'Authorization': 'token ae8b20ac8b28968d7085bf91c1d9b57ae80e9f12'}})
    .then(res =>  {
        return res.json()
    })
    .then(data => console.log(data[0].created_at))
    .catch(error => console.log(error));

const wait = (num) => {
    setTimeout( function() {
        githubUserPromise()
    }, num)
}

const githubUserPromise = new Promise((resolve, reject) => {
        resolve("Success")
});

githubUserPromise.then((message) => {
    console.log(message)
});

wait(1000).then(() => console.log('You\'ll see this after 1 second'));