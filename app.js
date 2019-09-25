
// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicio variables
var app = express();

// DB Connect
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if(err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

app.listen(3000, () => {
    console.log('Express server online port 3000');
});

// Rutas
app.get('/', (req, res, next) => {
    
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });

});