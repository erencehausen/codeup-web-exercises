"use strict"
$().ready(function () {
    $.get('../data/colors.json').done(function(
        data,
        status,
        jqXhr
    ){
        alert("AJAX call completed successfully!");
        console.log("Request status: " + status);
        console.log("Data returned from server:");
        console.log(data);
        let innerHTML = '<br>';
        data.forEach(function(item) {
            innerHTML += 'The code for ' + item['color'] + ' is ' + item['value'] + '<br>\n';
        })
        innerHTML += '<br>\n';
        $('#div1').html(innerHTML);
    });
});