// corgi array
const corgis = ["Pedro", "Poncho", "Pablo", "Patricio"];
const fs = require('fs');
const http = require('http');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const saveCorgis = async() => {await writeFile("corgis.txt",corgis.toString());}

const server = http.createServer( (request, response) => {
    
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Corgis</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de corgis</h1>');
        response.write('<p>Tenemos los siguientes corgis:</p>');
        response.write('<ul>');
        for (let i in corgis) {
            response.write('<li>' + corgis[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br><br>');
        response.write('<a href="nuevo">Agregar un nuevo corgi</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/capybara' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Capybara</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de un capybara</h1>');
        response.write('<h2>Los capybaras también se les conoce como carpinchos:</h2>');
        response.write('<a href="/">Regresar a la lista de corgis</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/crouton' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>crouton</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">crouton</h1>');
        response.write('<h2>Un croutón</h2>');
        response.write('<a href="/">Regresar a la lista de corgis</a><br></br>');
        response.write('<a href="https://crouton.net/">Ir al sitio de crutones oficial</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Corgis</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de corgis</h1>');
        response.write('<h2>Crea tu propio corgi:</h2>');
        response.write('<form action="nuevo" method="POST">');
        response.write('<label for="nombre">Nombre: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Palillos">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de corgis</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'POST') {  
        console.log("POST");
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            corgis.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Corgis</title>');
            response.write('</head><body>');
            response.write('<h1 id="principal">Este sitio es de corgis</h1>');
            response.write('<p>Tenemos los siguientes corgis:</p>');
            response.write('<ul>');
            for (let i in corgis) {
                response.write('<li>' + corgis[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>');
            response.write('<a href="nuevo">Agregar un nuevo corgi</a>');
            response.write('</body>');
            saveCorgis();
            return response.end();
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Corgis | Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este corgi no existe :(.</h1>');
        response.write('</body>');
        response.end();
    }


});

server.listen(3000);

