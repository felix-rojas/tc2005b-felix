// require express to use it
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const rutas = require ('./routes/dogs.routes.js')

//Middleware to create server
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

app.use(bodyParser.urlencoded({extended: false}));
app.use('/routes', rutas);
    

app.listen(3000);