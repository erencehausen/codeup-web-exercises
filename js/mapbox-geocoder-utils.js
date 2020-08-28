mapboxgl.accessToken = MAPBOX_TOKEN;
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)