const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { API_VERSION } = require('./config');

// Cargar rutas

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuracion Header HTTP

// Rutas

module.exports = app;