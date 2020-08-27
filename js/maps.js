console.log(secret);

mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

var marker = new mapboxgl.Marker().setLngLat([-98.4916, 29.4252]).addTo(map);

var setLngLat = function(coord){

}