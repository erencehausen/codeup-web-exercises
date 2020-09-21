"use strict"

$().ready(function(){
    var data = $.parseJSON($.get({
        url: "../data/morning-pushups-6.json",
        dataType: 'json',
        async: false
    }).responseText);

    $.post("../data/morning-pushups-6.json", {
        first_name: "",
        last_name: "",
        email: ""
    }).done(function(data){})
})