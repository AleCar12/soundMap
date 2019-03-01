let latX = 41.90146253396546;
let latY = 12.501475811004639;

let x = 41.900875603364106;
let y = 12.501352429389954;

let x1 = 41.901153122242064;
let y1 = 12.500435505730934;

let x2 = 41.900450398568324;
let y2 = 12.500623260361976;

// Day to night
function showDiv1() {
    document.getElementById('night').style.display = "block";
    document.getElementById('bt2').style.display = "block";
    document.getElementById('day').style.display = "none";

    //  Leaflet night map
    var mymap = L.map('mapN').setView([latX, latY], 18);

    // Crates map
    var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(mymap);
    
    // marker
    let pup = '<div class="popUp"> <h1>Galleria</h1> <img src="img/termini.jpg" id="imgPopUp"> <br> <div class="audio"> <div id="waveform"></div> <button type="button" class="btn btn-success">Play</button> </div>';

    L.marker([x, y]).addTo(mymap)
    .bindPopup(pup);

    L.marker([x1, y1]).addTo(mymap)
    .bindPopup('cc');

    L.marker([x2, y2]).addTo(mymap)
    .bindPopup('dd');


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
 }

// Night to day
function showDiv2() {
    document.getElementById('night').style.display = "none";
    document.getElementById('bt1').style.display = "block";
    document.getElementById('day').style.display = "block";

    //  Leaflet day map
    var mymap = L.map('mapD').setView([latX, latY], 18);

    // Crates map
    var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(mymap);

    // marker
    let pup = '<div class="popUp"> <h1>Galleria</h1> <img src="img/termini.jpg" id="imgPopUp"> <br> <div class="audio"> <div id="waveform"></div> <button type="button" class="btn btn-success">Play</button> </div>';
    

    L.marker([x, y]).addTo(mymap)
    .bindPopup(pup);

    L.marker([x1, y1]).addTo(mymap)
    .bindPopup('aa');

    L.marker([x2, y2]).addTo(mymap)
    .bindPopup('bb');
    
    
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
}