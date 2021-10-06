
$(document).ready(function () {
	// var map = L.map('map').setView([27.7, 85.4], 7);
	var map = L.map('map', {
		// layers: [base],
		center: new L.LatLng(-24.726874870506972, 137.19726562500003),
		zoom: 3,
	});
	map.on('click',function(){
		console.log(map.getCenter());
	})
	console.log(map);
	osm = L.tileLayer('https://api.mapbox.com/styles/v1/nishon-naxa/ckgkuy7y08rpi19qk46sces9c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmlzaG9uLW5heGEiLCJhIjoiY2s5Nzl3MnoyMDQ5ZzNscHJ0eTZvOHBrcCJ9.JL4lV84Jv8Wi1cYNhJilPA', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		maxZoom: 20,
		subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
	});
	googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
		maxZoom: 20,
		subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
	});
	googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
		maxZoom: 20,
		subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
	});
	googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
		maxZoom: 20,
		subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
	});
	// var markerIcon = [
	// 	["Kritipur",27.67988,85.27544],
	// 	["Pokhara",28.26689,83.96851],
	// 	["Waling",27.98333,83.76667],
	// 	["Banepa",27.62979,85.52138],
	// 	["Butwal",27.70055,83.44836],
	// 	];

	// 	for (var i = 0; i < markerIcon.length; i++) {
	// 		marker = new L.marker([markerIcon[i][1],markerIcon[i][2]])
	// 			.bindPopup(markerIcon[i][0])
	// 			.addTo(map);
	// 	}

	var baseLayers = {
		"OpenStreetMap": osm,
		"Google Streets": googleStreets,
		"Google Hybrid": googleHybrid,
		"Google Satellite": googleSat,
		"Google Terrain": googleTerrain,

	};
	
	// var latLong = [{
	// 	"lat": 27.67988,
	// 	"lng": 85.27544
	//   }, {
	// 	"lat": 28.26689,
	// 	"lng": 83.96851
	//   }, {
	// 	"lat": 27.98333,
	// 	"lng": 83.76667
	//   }, {
	// 	"lat": 27.62979,
	// 	"lng": 85.52138
	//   }, {
	// 	"lat": 27.70055,
	// 	"lng": 83.44836
	//   }];
	// customPopup = '<div class="bind-popup"> <div class="bind-header"><h5>Western Cape College</h5> <p><i class="fa fa-map-marker"></i>URBAN INFRASTRUCTURE</p><em><span>source:</span>Iom Nepal</em></div><a href="openSpace_details.html" class="openSpace_btn">View Details</a></div><ul><li></li><li></li></ul>'
	// var customOptions =
	// {
	// 	popupAnchor: [-10, -10],
	// 	'maxWidth': '400',
	// 	'width': '200',
	// 	'className': 'popupCustom'
	// }
	// var Kritipur = L.circle([-24.726874870506972, 137.19726562500003], {
	// 	color: '#047c41',
	// 	fillColor: '#047c41',
	// 	fillOpacity: 0.7,
	// 	radius: 29000
	// }).addTo(map);

	// Kritipur.bindPopup(customPopup,customOptions).openPopup();
	// Kritipur.on('click',function(){
	// 	console.log('click');
	// 	map.setView([-24.726874870506972, 137.19726562500003], 7);
	// 	// map.setZoom(10);
	// 	// Kritipur.
	// })
	// var pokhara = L.circle([-17.726874870506972, 137.19726562500003], {
	// 	color: '#047c41',
	// 	fillColor: '#047c41',
	// 	fillOpacity: 0.7,
	// 	radius: 29000
	// }).addTo(map);

	// pokhara.bindPopup(customPopup,customOptions);
	// pokhara.on('click',function(){
	// 	// console.log('click');
	// 	map.setView([-24.726874870506972, 137.19726562500003], 7);
	// 	// Kritipur.
	// })
	// var butwal = L.circle([-17.726874870506972, 137.19726562500003], {
	// 	color: '#047c41',
	// 	fillColor: '#047c41',
	// 	fillOpacity: 0.7,
	// 	radius: 29000
	// }).addTo(map);

	// butwal.bindPopup(customPopup,customOptions);
	// butwal.on('click',function(){
	// 	// console.log('click');
	// 	map.setView([-17.726874870506972, 137.19726562500003], 7);
	// 	// Kritipur.
	// })
	// var waling = L.circle([-21.726874870506972, 137.19726562500003], {
	// 	color: '#047c41',
	// 	fillColor: '#047c41',
	// 	fillOpacity: 0.7,
	// 	radius: 29000,
	// }).addTo(map);

	// waling.bindPopup(customPopup,customOptions);
	// waling.on('click',function(){
	// 	// console.log('click');
	// 	map.setView([-21.726874870506972, 137.19726562500003], 7);
	// 	// Kritipur.
	// })
	// var banepa = L.circle([27.62979, 85.52138], {
	// 	color: '#047c41',
	// 	fillColor: '#047c41',
	// 	fillOpacity: 0.7,
	// 	radius: 400
	// }).addTo(map);

	// banepa.bindPopup(customPopup,customOptions);
	// latLong.forEach(function(feature) {
	// 	var circle = L.circle(feature, {
	// 	  color: 'red',
	// 	  fillColor: '#f03',
	// 	  fillOpacity: 0.5,
	// 	  radius: 5000
	// 	}).addTo(map);
	//   });

	//   myMap.panTo([2, 22]);

	layerswitcher = L.control.layers(baseLayers, {}, { collapsed: true }).addTo(map);
});

$('.leaflet-popup-content, .leaflet-popup-content-wrapper').css('width', '300px');
