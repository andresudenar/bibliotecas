'use strict';

const 
    express = require('express'),
    router = express.Router(),
    bibliotecas = require('../db.json');

var map = L.map('map').setView([4.0000000, -72.0000000], 5.45);
for (var i in bibliotecas) {

    var cadena = bibliotecas[i].georeferencia;
    cadena = cadena.replace("°","");
    cadena = cadena.replace("°","");
    cadena = cadena.replace("(","");
    cadena = cadena.replace(")",""); //remplanza todas las l por j en la cadena
    var coor = L.marker([cadena]).addTo(map) .bindPopup('Colombia') .openPopup();

    console.log(cadena);
}
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ',
        maxZoom: 18,
        minZoom: 0,
    }).addTo(map);