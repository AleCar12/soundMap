let x = 41.90197499215443;
let y = 12.50153381201244;

// Day to night
function showDiv1() {
    document.getElementById('night').style.display = "block";
    document.getElementById('bt2').style.display = "block";
    document.getElementById('day').style.display = "none";

    //  Leaflet night map
    var mymap = L.map('mapN').setView([x,y], 18);

    // Crates map
    var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
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
    var mymap = L.map('mapD').setView([x,y], 18);

    // Crates map
    var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(mymap);

    // marker
    let pup = '<div class="popUp"> <img src="img/termini.jpg" id="imgPopUp"> <br> <div class="audio"> <div id="waveform"></div> <button type="button" class="btn btn-success">Play</button> </div>';

    L.marker([41.90100, 12.5017]).addTo(mymap)
    .bindPopup(pup)
    .openPopup();

    // TEST AUDIO

    // Wavesurfer audio spectrum
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'lightblue',
        progressColor: 'blue'
    });

    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });

    wavesurfer.load('audio.mp3');

    // END TEST AUDIO
 }