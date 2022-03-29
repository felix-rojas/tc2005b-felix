const express = require('express');
const router = express.Router();

router.get('/nuevo', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Dogs</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es de perritos</h1><h2>Aquí nacen los perritos:</h2><form action="/dogs/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Pascal"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/dogs">Regresar a la lista de perritos</a></body></html>';
    response.send(respuesta); 
});

router.get('/corgi', (request, response, next) => {
    response.send('He aquí un corgi <br>');
});

router.get('/nutria', (request, response, next) => {
    response.send('¿Una nutria? <br>');
});

router.get('/salchicha', (request, response, next) => {
    response.send('He aquí un salchicha <br>');
});



module.exports = router;