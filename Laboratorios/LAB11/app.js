// require express to use it
const express = require('express');
const app = express();

//Middleware to create server
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);