// This script works fine but let's update the JS!
// TODO: REFACTOR AS MANY PARTS OF THIS SCRIPT FROM ES5 TO ES6 SYNTAX AS POSSIBLE

"use strict";

const showBtn = document.getElementById("showBtn");

const movies = [
    {
        name: "LOTR",
        year: "2001",
        genre: "Fantasy"
    },
    {
        name: "The Matrix",
        year: "1999",
        genre: "Sci-Fi"
    },
    {
        name: "Shine",
        year: "1996",
        genre: "Drama"
    }
];
const buildMovieHTML = movie => {
    var html = "";
    html += `
            <ul>
                <li>${movie.name}</li>
                <li>${movie.year}</li>
                <li>${movie.genre}</li>
            </ul>
        `;
    return html;
}
const addHTMLToPage = movies => {
    const movieItems = document.getElementsByClassName('movie');
    let i = 0;
    for (let movie of movieItems) {
        console.table(movie)
        movie.innerHTML = buildMovieHTML(movies[i]);
        i++;
    }
}
// const addHTMLToPage = function (movies) {
//     var movieItems = document.getElementsByClassName('movie');
//     for (var i = 0; i < movies.length; i += 1) {
//         movieItems[i].innerHTML = buildMovieHTML(movies[i]);
//     }
// }
showBtn.addEventListener("click", () => {
    addHTMLToPage(movies);
});