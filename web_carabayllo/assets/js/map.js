var map = L.map('map', {
    center: [-11.795308739677688, -76.99122021663355],
    zoom: 11,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-11.795308739677688, -76.99122021663355], [-11.795308739677688, -76.99122021663355]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] });
bgoogleSat.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_carabayllo/wms?", {
	   layers: "web_carabayllo:colegio", //gisweb:colegios
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
colegios.addTo(map);

var curvas = L.tileLayer.wms("http://localhost:8080/geoserver/web_carabayllo/wms?", {
	   layers: "web_carabayllo:curvas", //gisweb:curvas
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
curvas.addTo(map);

var distrito = L.tileLayer.wms("http://localhost:8080/geoserver/web_carabayllo/wms?", {
	   layers: "web_carabayllo:distrito", //gisweb:distrito
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
distrito.addTo(map);

var farmacia = L.tileLayer.wms("http://localhost:8080/geoserver/web_carabayllo/wms?", {
	   layers: "web_carabayllo:farmacia", //gisweb:farmacia
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
farmacia.addTo(map);

var hospital = L.tileLayer.wms("http://localhost:8080/geoserver/web_carabayllo/wms?", {
	   layers: "web_carabayllo:hospital", //gisweb:hospital
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hospital.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat
};

var overlayMaps = {
    "Colegios": colegios,
    "Curvas": curvas,
    "Distrito": distrito,
    "Farmacia": farmacia,
    "Hospital": hospital
}
L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);