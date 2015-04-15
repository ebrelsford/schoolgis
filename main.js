$(document).ready(function() {
    var map = L.map('map').setView([40.70, -73.96], 11);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/ebrelsford.ho06j5h0/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>'
    }).addTo(map);
});
