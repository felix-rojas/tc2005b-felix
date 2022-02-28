const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/'){
        response.setHeader('Content-type','text/html')
        response.write('<!DOCTYPE html>')
        response.write('<html><head>')
        response.write('<!DOCTYPE html>')
        response.write('<p>Tenmos los siguientes capybaras</p>')
        for (let i in capybaras){
            response.write('<li>'+capybaras[i]+'</li>')
        
        }
    }
    else {
        response.statusCode = 404;
    }
}