const capybaras = ["Pedro", "Poncho", "Pablo", "Patricio"];

const http = require('http');

const server = http.createServer((req, resp) => {

    if (req.url === '/') {
        resp.setHeader('Content-Type', 'text/html');
        resp.write('<!DOCTYPE html>');
        resp.write('<html lang="es-mx"><head>');
        resp.write('<meta charset="utf-8">');
        resp.write('<title>Capybaras</title>');
        resp.write('</head><body>');
        resp.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        resp.write('<p>Tenemos los siguientes capybaras:</p>');
        resp.write('<ul>');
        for (let i in capybaras) {
            resp.write('<li>' + capybaras[i] + '</li>');
        }
        resp.write('</ul>');
        resp.write('<br><br>');
        resp.write('<a href="nuevo">Agregar un nuevo capybara</a>');
        resp.write('</body>');
        resp.end();
    } 
    
    else if (req.url === '/nuevo' && req.method === 'GET') {
        resp.setHeader('Content-Type', 'text/html');
        resp.write('<!DOCTYPE html>');
        resp.write('<html lang="es-mx"><head>');
        resp.write('<title>Capybaras</title>');
        resp.write('<meta charset="utf-8">');
        resp.write('</head><body>');
        resp.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        resp.write('<h2>Aquí nacen los capybaras:</h2>');
        resp.write('<form action="nuevo" method="POST">');
        resp.write('<label for="nombre">Nombre: </label> ');
        resp.write('<input type="text" id="nombre" name="nombre" placeholder="Pedro">');
        resp.write('<br><br>');
        resp.write('<input type="submit" value="Enviar">');
        resp.write('</form>');
        resp.write('<br><br>');
        resp.write('<a href="/">Regresar a la lista de capybaras</a>');
        resp.write('</body>');
        resp.end();
    } 
    
    else if (req.url === '/nuevo' && req.method === 'POST') {
        console.log("POST");
        const datos = [];
        req.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        
        return req.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            capybaras.push(nuevo_dato);
            resp.setHeader('Content-Type', 'text/html');
            resp.write('<title>Capybaras</title>');
            resp.write('</head><body>');
            resp.write('<h1 id="principal">Este sitio es de capybaras</h1>');
            resp.write('<p>Tenemos los siguientes capybaras:</p>');
            resp.write('<ul>');
            for (let i in capybaras) {
                resp.write('<li>' + capybaras[i] + '</li>');
            }
            resp.write('</ul>');
            resp.write('<br><br>');
            resp.write('<a href="nuevo">Agregar un nuevo capybara</a>');
            resp.write('</body>');
            return resp.end();
        });
    } 
    
    else {
        resp.statusCode = 404;
        resp.setHeader('Content-Type', 'text/html');
        resp.write('<!DOCTYPE html>');
        resp.write('<html><head>');
        resp.write('<meta charset="utf-8">');
        resp.write('<title>Capybaras | Not found</title>');
        resp.write('</head><body>');
        resp.write('<h1 id="principal">Este capybara no existe, amigo.</h1>');
        resp.write('</body>');
        resp.end();
    }


});

server.listen(3000);

