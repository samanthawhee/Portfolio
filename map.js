// Create map
var map = L.map('map').setView([52, -1], 6);

// Load map tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Locations data
var locations = [
    ["Sugarloaf", 51.86317478675691, -3.058167346902702, "Sugarloaf.jpg"],
    ["Slad", 51.76549436635644, -2.185688334927798, "Slad.jpg"],
    ["Cotswold", 51.639444441064065, -2.1587906484849633, "Cotswold.jpg"],
    ["Cheddar Gorge", 51.28689791416883, -2.759805771187122, "Cheddar_Gorge.jpg"],
    ["Castle Combe", 51.491405226459854, -2.2285949555283997, "Castle_Combe.jpg"],
    ["Brecon Beacons", 51.86327607781095, -3.42762593326692, "Brecon_Beacons.jpg"],
    ["Goblin Combe", 51.38783437841891, -2.756496344056122, "Goblin_Combe.jpg"],
    ["Pen y Fan", 51.884444444339664, -3.435927755393184, "Pen_y_Fan.jpg"],
    ["Backwell", 51.41101267015877, -2.730661117005706, "Backwell.jpg"],
    ["Chew Lake", 51.3366185098912, -2.620559143622377, "Chew_Valley_Lake.jpg"],
    ["Woodchester", 51.7189831425497, -2.231416950460458, "Woodchester.jpg"],
    ["Tintern Abbey", 51.69696396687991, -2.677035057522352, "Tintern_Abbey.jpg"],
    ["Eagl's nest", 51.674892248808504, -2.6838636895479384, "Eagls_nest.jpg"],
    ["Box Hill", 51.25534821123979, -0.30835354791951886, "Box_Hill.jpg"],
    ["Mendip Hills", 51.30075273105124, -2.71572247075203, "Mendip_Hills.jpg"],
    ["River Chew", 51.378436948257324, -2.545596592055234, "River_Chew.jpg"],
    ["Epping Forest", 51.665734774679194, 0.04994765960329628, "Epping_Forest.jpg"],
    ["Rickmansworth", 51.63876924502974, -0.47593417517722636, "Rickmansworth.jpg"],
    ["Loughrigg Fell", 54.43792336564438, -3.0087473755910588, "Loughrigg_Fell.jpg"],
    ["Rydal Cave", 54.443375319082264, -2.9965182591373205, "Rydal_Cave.jpg"],
    ["Dartmoor", 50.57205602097909, -3.9206133007958854, "Dartmoor.jpg"],
    ["Snowdonia", 52.900668189709926, -3.8961560252848217, "Snowdonia.jpg"],
    ["Peak District", 53.344070606249595, -1.7779189273329883, "Peak.jpg"],
    ["Seven Sisters", 50.74836373607868, 0.18984785964971923, "Seven_Sisters.jpg"]
];

// Loop through locations
locations.forEach(function(place) {
    L.marker([place[1], place[2]]).addTo(map)
        .bindPopup(
            "<b>" + place[0] + "</b><br><br>" +
            "<img src='../image/hiking/" + place[3] + "' width='100'>"
        );
});