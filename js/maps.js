mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4916, 29.4252],
    zoom: 11.15,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
});

map.on('load', function() {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Make it Mount Pleasant</strong><p></p>',
                        'icon': 'theatre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.5833302, 29.4879231]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong></strong><p></p>',
                        'icon': ''
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.003168, 38.894651]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong></strong><p>.</p>',
                        'icon': 'bar'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.090372, 38.881189]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong></strong><p></p>',
                        'icon': 'art-gallery'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.111561, 38.882342]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong></strong><p></p>',
                        'icon': 'bicycle'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.052477, 38.943951]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong></strong><p></p>',
                        'icon': 'rocket'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.043444, 38.909664]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong></strong><p></p>',
                        'icon': 'music'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.031706, 38.914581]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong></strong><p></p>',
                        'icon': 'music'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.020945, 38.878241]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong></strong><p></p>',
                        'icon': 'music'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.007481, 38.876516]
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });

    map.on('click', 'places', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseenter', 'places', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'places', function() {
        map.getCanvas().style.cursor = '';
    });
});