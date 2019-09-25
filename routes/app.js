// Requires
var express = require('express');

// Inicio variables
var app = express();

// Rutas
app.get('/', (req, res, next) => {
    
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });

});

module.exports = app;