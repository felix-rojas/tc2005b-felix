// require express to use it
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
var stream = fs.createReadStream("front-end/index.html")


// comment after testing
stream.on("data", function(data) {
    let chunk = data.toString();
    console.log(chunk);
});

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
    stream;
    for (let i in dogs) {
        stream += '<li>' + dogs[i] + '</li>'
    }
    stream+='<br><br><a href="nuevo">Agregar un nuevo perrito</a></body>'
    response.send(stream)
});

app.use((request, response, next) => {
    console.log('Another refresh!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);