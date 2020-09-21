'use strict';
// $().ready(function() {
//     const usersNum = function(num) {
//         let showResult = $('#result').html(num + '<br>');
//         for(let i = 0; i <= num; i++) {
//             showResult += showResult;
//             console.log(num);
//             num = num/2;
//         }
//     }
//     usersNum(8);
// })
$().ready(function() {
    function showFactors(num) {
        if (isNaN(num)) {
            $('#result').html('The argument, ' + num + ', is not a number.');
        } else if (typeof num !== 'number') {
            $('#result').html('The type of ' + num + 'is ' + typeof num + '. It should be a number.');
        } else if (!Number.isInteger(num)) {
            $('#result').html('The argument, ' + num + ', is not an integer.');
        } else {
            $('#result').html(slowFactor(num));
        }
    }

    function slowFactor(num) {
        var output = 'List of factors of ' + num + ': <br>';
        if (num < 0) num *= -1;
        for (var i = 1; i <= num; i++) {
            if (num % i === 0) output += ' ' + i;
        }
        return output;
    }

    $('#user-number-input').click(function() {
        let userNum = parseInt($('#users-num').val());
        showFactors(userNum);
    });

})