// Day to night
function showDiv1() {
    document.getElementById('night').style.display = "block";
    document.getElementById('bt2').style.display = "block";
    document.getElementById('day').style.display = "none";

    //  Leaflet night map
    var mymap = L.map('mapN').setView([41.90090, 12.5017], 18);

    // Crates map
    var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(mymap);

    L.marker([41.90090, 12.5017]).addTo(mymap)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
 }

// Night to day
function showDiv2() {
    document.getElementById('night').style.display = "none";
    document.getElementById('bt1').style.display = "block";
    document.getElementById('day').style.display = "block";

    //  Leaflet day map
    var mymap = L.map('mapD').setView([41.90090, 12.5017], 18);

    // Crates map
    var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    // var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(mymap);

    L.marker([41.90100, 12.5017]).addTo(mymap)
    .bindPopup('')
    .openPopup();

    // TEST AUDIO



    // END TEST AUDIO
 }