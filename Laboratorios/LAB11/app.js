// require express to use it
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middleware to create server
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

app.use(bodyParser.urlencoded({extended: false}));
app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});
      

// instantiates a route using middleware
app.use('/corgi', (request, response, next) => {
    response.send('Respuesta de la ruta "/corgi"');
    let answer = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Capybaras</title></head><body><h1 id="principal">Este sitio es de capybaras</h1><p>Tenemos los siguientes capybaras:</p>'
    for (let i in capybaras) {
        '<li>' + capybaras[i] + '</li>'
    }
    answer+='<br><br><a href="nuevo">Agregar un nuevo capybara</a></body>'
    response.send(answer)
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);