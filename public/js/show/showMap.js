mapboxgl.accessToken = document.body.getAttribute('data-show-mapbox-token');
const showCampground = JSON.parse(document.querySelector('.detail-container__paragraph').getAttribute('data-campground'));
const showCampgroundImage = JSON.parse(document.querySelector('.detail-container__paragraph').getAttribute('data-campground-image'))
const showCampgroundTitle = JSON.parse(document.querySelector('.detail-container__paragraph').getAttribute('data-campground-title'))
const showCampgroundPrice = JSON.parse(document.querySelector('.detail-container__paragraph').getAttribute('data-campground-price'))


const showMap = new mapboxgl.Map({
    container: 'show__map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: showCampground.coordinates, // starting position [lng, lat]
    zoom: 17 // starting zoom
});




mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js');


showMap.addControl(new MapboxLanguage({
    defaultLanguage: 'vi'
}));

showMap.addControl(new mapboxgl.NavigationControl());



const el = document.createElement('div');
el.className = 'marker';

new
    mapboxgl.Marker(el).setLngLat(showCampground.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })

    )
    .addTo(showMap);