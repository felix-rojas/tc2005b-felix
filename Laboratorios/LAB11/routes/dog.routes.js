const express = require('express');

const router = express.Router();

const dogs = ["Poncio", "Pánfilo", "Patroclo", "Patricio"];

router.get('/nuevo', (request, response, next) => {
    console.log('GET /dogs/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Dogs</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es de perritos</h1><h2>Aquí nacen los perritos:</h2><form action="/dogs/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Pascal"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/dogs">Regresar a la lista de perritos</a></body></html>';
    response.send(respuesta); 
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /dogs/nuevo');
    console.log(request.body);
    dogs.push(request.body.nombre);
    response.redirect('/dogs');
});

router.use('/', (request, response, next) => {
    console.log('Ruta /dogs');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Dogs</title></head><body><h1 id="principal">Este sitio es de perros chidos</h1><p>Tenemos los siguientes perritos:</p><ul>';
    for (let i in dogs) {
        respuesta += '<li>' + dogs[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="/dogs/nuevo">Add a new dog</a></body></html>';
    response.send(respuesta); 
});

module.exports = router;