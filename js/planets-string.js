(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    console.log(planetsArray.join('<br>'));
    /**
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

})();
