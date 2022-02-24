console.log("Hello World");

// fs: fylesystem
// we use require to extract a specific package from a module
// assign to constant so things dont get fucky wucky
const fs = require('fs');

// writes a file, content
// we use the synchronous function and the instructions run until they are done
fs.writeFileSync('hello.txt', 'Hello world from NODE.js')

// node js is constantly executing so it checks everything in the priority queue
const array = [500, 50, 70, 100, 20, 20, 10]

for (let item of array) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

// databse reading must be async so it goes faster, it can retrieve
// the most important data

// loading http module to create server
const http = require('http');
const { stringify } = require('querystring');

const server = http.createServer((request, response) => {

    
    // with this we can see what the request object posesses
    // it also showcases how other async processes run
    // console.log(request);
    
    // with this you can get the object from the request since it is a JSON
    console.log(request.url);
    
    // prepares the header of the response
    response.setHeader('Content-type', 'text/html');
    
    response.write();
    
    // responds to the listen event to stop
    response.end();

    // generates awful textfile form js object 
}
);

// listen to port 3000
// the listen activates the server
// the listen assumes a response so it will wait forever if there is no response
server.listen(3000);