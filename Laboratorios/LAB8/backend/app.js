console.log("Hello World");

// fs: fylesystem
// we use require to extract a specific package from a module
// assign to constant so things dont get fucky wucky
const filesystem = require('fs');

// writes a file, content
// we use the synchronous function and the instructions run until they are done
filesystem.writeFileSync('hello.txt','Hello world from NODE.js')

