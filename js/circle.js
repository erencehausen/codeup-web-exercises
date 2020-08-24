(function() {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.PI * Math.sqrt(this.radius);
            return area;
        },

        logInfo: function (doRounding) {
            if (doRounding === true) {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
            } else {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
