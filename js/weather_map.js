$().ready(function(){
"use strict";
const weatherHeader = $('#weather-header');
const headerFlTemp = $('#header-fl-temp');
const headerMinTemp = $('#header-min-temp');
const headerDt = $('#header-dt');
const headerInfoList = $('#header-info-list');
const searchbarInput = $('#location');
const searchbutton = $('#search-bar-button');
const weatherIcon = $('#weather-icon');
const displayLocation = $('#display-location');
const hoursTab = $('#hours-tab');
const daysTab = $('#days-tab');
const hoursButton = $('#hours-button');
const daysButton = $('#days-button');
daysTab.hide();

// MAPBOX
const homeLocation = [-98.4916, 29.4252]; // San Antonio
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJlbmNlaGF1c2VuIiwiYSI6ImNrZWQ4NXFvcTBjcnMycm1ucmxpbW1zMnIifQ.5G9N5cSAksdmyqrQ37Msqw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: homeLocation,
    zoom: 11.15,
    pitch: 20,
    bearing: -17.6,
    antialias: true
});

// Open Weather Map Request
let q = 'San Antonio'
async function weatherRequest(weatherUrl) {
    fetch(weatherUrl)
        .then(checkStatus)
        .then(parseJSON)
        .catch(error => console.log('Problem', error))
        .then(data => {
            const weatherList = data.list;
            displayLocation.html(q);
            showWeatherHeader(weatherList)
            showHoursTab(weatherList)
            showDaysTab(weatherList)
    })
}
weatherRequest(`http://api.openweathermap.org/data/2.5/forecast?q=San Antonio&appid=${OPEN_WEATHER_APPID}&units=imperial`);

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function parseJSON(response) {
    return response.json();
}

function showWeatherHeader(data) {
    for (let i = 0; i <= 8; i++) {
        let dataMain = data[i].main;
        let dataWind = data[i].wind;
        let html = `
                <li>${data[i].weather[0].description}</li>
                <li>Humidity: ${dataMain.humidity}%</li>
                <li>Visibility: ${data[i].visibility}m</li>
                <li>Wind Speed: ${dataWind.speed}mi/hr ${dataWind.deg}°</li>`
        if (data[i].dt_txt.includes('12:00:00')) {
            weatherIcon.attr('src', `http://openweathermap.org/img/wn/${data[i].weather[0].icon}@2x.png`);
            headerFlTemp.html(`${Math.round(dataMain.feels_like)}&deg;F`);
            headerMinTemp.html(`<strong>/ ${Math.round(dataMain.temp_min)}&deg;</strong>`);
            headerDt.html(`${data[i].dt_txt}`);
            headerInfoList.html(html)
            break;
        }
    }
}

function showHoursTab(data) {
    let currentDay = data[0].dt_txt.split(' ')[0];
    let html = '';
    for (let i = 0; i < data.length; i++) {
        let dataMain = data[i].main;
        if (data[i].dt_txt.split(' ')[0] === currentDay) {
            html += `
                <div id="hours-list-${i}" class="card m-2">
                    <div class="p-2 col text-center">
                        <h4 class="mt-2">${data[i].dt_txt.split(' ')[1]}</h4>
                        <h2 class="mb-0">${Math.round(dataMain.feels_like)}&deg;F</h2>
                        <p class="m-auto">${Math.round(dataMain.temp_min)}&deg;F</p>
                    </div>
                </div>`
            hoursTab.html(html)
        }
    }
}

function showDaysTab(data) {
    let html = ''
    for (let i = 0; i < data.length; i++) {
        let dataMain = data[i].main;
        if (data[i].dt_txt.includes('12:00:00')) {
            html += `
                <div class="card m-2" type="button">
                    <div class="p-2 col text-center">
                        <h5 class="mt-2">${data[i].dt_txt.split(' ')[0]}</h5>
                        <p class="mt-2">At ${data[i].dt_txt.split(' ')[1]}</p>
                        <h2 class="mb-0">${Math.round(dataMain.feels_like)}&deg;F</h2>
                        <p class="m-auto">${Math.round(dataMain.temp_min)}&deg;F</p>
                    </div>
                </div>`
            daysTab.html(html)
        }
    }
}

// Listeners
searchbutton.click(function() {
    q = searchbarInput.val();
    let weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
    weatherRequest(weatherUrl)
})
searchbarInput.keypress(function(event){
    if (event.keyCode === 13) {
        q = searchbarInput.val();
        let weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
        weatherRequest(weatherUrl)
    } else {
        // TODO: Add error catch
        console.log('Error');
    }
})
// hoursButton.click(searchEvent)
daysButton.click(function () {
    hoursTab.fadeOut(500)
    daysTab.delay(500).fadeIn(500)
})
hoursButton.click(function () {
    daysTab.fadeOut(500)
    hoursTab.delay(500).fadeIn(500)
})
})
