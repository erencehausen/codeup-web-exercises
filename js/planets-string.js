var planetsStrings = (function(){
    "use strict";
    function planetsStrings() {
        var planets = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
        var planetsArray;

        /*
     * TODO:
     * Convert planets to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
        planetsArray = planets.split('|');
        console.log(planetsArray);
        /* Review notes:
         * var brokenPlanets = planetsArray.join("<br>");
         * console.log(brokenPlanets);
         */

        /*
         * TODO:
         * Create a string with <br> tags between each planet. console.log() your
         * results. Why might this be useful?
         */
        console.log(planetsArray.join('<br>'));

        /*
         * BONUS:
         * Create another string that would display your planets in an undordered
         * list. You will need an opening AND closing <ul> tags around the entire
         * string, and <li> tags around each planet.
         */
        // console.log(planetsArray.join('<br>'));
        // console.log(planetsArray.unshift("<ul>"));
        // console.log(planetsArray.push("<ul/>"));
        // console.log(planetsArray.join("</li>.<li>"));
        // console.log(planetsArray.split("."));
        // console.log(planetsArray.unshift("<li>"));
        /*
        * var planetsList = "<ul><li>";
        * planetsList += planetsArray.join("</li>\n<li>");
        * planetsList += "</li>\n</ul>";
        * console.log(planetsList);
        *
        * document.getElementById("planets").innerHTML = planetsList;
        * */
        return true;
    }
})();
