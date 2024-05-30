mapboxgl.accessToken = document.body.getAttribute('data-mapbox-token');
const indexCamp = JSON.parse(document.body.getAttribute('data-index-camp'));
const formattedCamp = {
    type: "FeatureCollection",
    features: indexCamp
}
console.log(JSON.stringify(formattedCamp))
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [105.84582, 21.004062], // starting position [lng, lat]
    zoom: 16 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());


mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js');
const language = new MapboxLanguage({
    defaultLanguage: 'vi'
});
map.addControl(language);

map.on('load', () => {
    // Add a new source from our GeoJSON data and
    // set the 'cluster' option to true. GL-JS will
    // add the point_count property to your source data.
    map.addSource('campgrounds', {
        type: 'geojson',
        data: formattedCamp,
        generateId: true
    });

    // map.addLayer({
    //     id: 'clusters',
    //     type: 'circle',
    //     source: 'campgrounds',
    //     filter: ['has', 'point_count'],
    //     paint: {
    //         'circle-color': '#51bbd6',
    //         'circle-radius': 30, // Set a fixed radius

    //         'circle-stroke-width': 3,
    //         'circle-stroke-color': '#fff'
    //     }
    // });

    // map.addLayer({
    //     id: 'cluster-count',
    //     type: 'symbol',
    //     source: 'campgrounds',
    //     filter: ['has', 'point_count'],
    //     layout: {
    //         'text-field': ['get', 'point_count_abbreviated'],
    //         'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    //         'text-size': 12
    //     }
    // });

    map.addLayer({
        id: 'unclustered-pointt',
        type: 'circle',
        source: 'campgrounds',
        paint: {
            'circle-color': '#11b4da',
            'circle-radius': 10,
            'circle-stroke-width': 3,
            'circle-stroke-color': '#fff'
        }
    });

    // inspect a cluster on click
    // map.on('click', 'clusters', (e) => {
    //     const features = map.queryRenderedFeatures(e.point, {
    //         layers: ['clusters']
    //     });
    //     const clusterId = features[0].properties.cluster_id;
    //     map.getSource('campgrounds').getClusterExpansionZoom(
    //         clusterId,
    //         (err, zoom) => {
    //             if (err) return;

    //             map.easeTo({
    //                 center: features[0].geometry.coordinates,
    //                 zoom: zoom
    //             });
    //         }
    //     );
    // });

    // When a click event occurs on a feature in
    // the unclustered-point layer, open a popup at
    // the location of the feature, with
    // description HTML from its properties.
    map.on('click', 'unclustered-pointt', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const text = e.features[0].properties.popUpMarkup

        // Ensure that if the map is zoomed out such that
        // multiple copies of the feature are visible, the
        // popup appears over the copy being pointed to.
        // while (Math.abs(e.lngLat.lng - coordinates[0]) > 120) {
        //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        // }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(
                text
            )
            .addTo(map);
    });
    const searchInput = document.querySelector('.index-map-search');

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const query = searchInput.value;
            searchLocation(query);
        }
    });

    function searchLocation(query) {
        const bboxVietnam = "102.14441,8.19309,109.46926,23.39274"; // Approximate bbox for Vietnam
        const centralVietnam = "106.3468,10.8231"; // Approximate central point for Vietnam (Ho Chi Minh City)
        const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}&language=vi&country=VN&bbox=${bboxVietnam}&proximity=${centralVietnam}&limit=1`;
        fetch(geocodeURL)
            .then(response => response.json())
            .then(data => {
                if (data.features.length > 0) {
                    const [lng, lat] = data.features[0].center;
                    map.flyTo({
                        center: [lng, lat],
                        zoom: 14
                    });
                } else {
                    alert('Location not found.');
                }
            })
            .catch(error => console.error('Error:', error));
    }

    map.on('mouseenter', 'clusters', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'clusters', () => {
        map.getCanvas().style.cursor = '';
    });
});


//expand ui map button function and the button animation itself
function scrollToTop() {
    window.scrollTo({
        top: 100,
        behavior: 'smooth'
    });
}
function scrollToBelowTop() {
    window.scrollTo({
        top: 200,
        behavior: 'smooth'
    });
}

const mapButton = document.querySelector('.map-btn')
const mapButtonSVG1 = mapButton.querySelector('.map-btn__svg-1')
const mapButtonSVG2 = mapButton.querySelector('.map-btn__svg-2')
const indexMapSearch = document.querySelector('.index-map-search')
let mapStatus = false
const mapTL = gsap.timeline({
    defaults:
    {
        duration: .5,
        ease: 'power4.inOut'
    }
})
const btnTL = gsap.timeline({
    defaults:
    {
        duration: .3,
        ease: 'power4.inOut'
    }
})
mapTL.to('.map', {
    height: '400px'
})
    .to(indexMapSearch, {
        display: 'block'
    }, '<')
    .from(mapButton, {
        rotate: '180deg',

    }, '<')
btnTL.to(mapButton, {
    backgroundColor: 'black',
    border: '1px solid black',
})
    .to(mapButtonSVG1, {
        fill: 'white',
        transform: 'translate(-50%, -50%) scale(0.25)',
        opacity: '1'
    }, '<')
    .to(mapButtonSVG2, {
        fill: 'white',
        transform: 'translate(-50%, -80%) scale(0.25)',
        opacity: '0'
    }, '<')
mapTL.paused(true)
mapButton.addEventListener('click', () => {
    if (!mapStatus) {
        mapTL.play()
        mapStatus = true
        map.resize()
        scrollToBelowTop()
    }
    else {
        mapTL.reverse()
        mapStatus = false
        scrollToTop()
        map.resize()
    }
})
btnTL.paused(true)
mapButton.addEventListener('mouseenter', () => {
    btnTL.play()
})
mapButton.addEventListener('mouseleave', () => {
    btnTL.reverse()
})
