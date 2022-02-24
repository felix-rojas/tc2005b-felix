console.log("Hello World");

// fs: fylesystem
// we use require to extract a specific package from a module
// assign to constant so things dont get fucky wucky
const filesystem = require('fs');

// writes a file, content
// we use the synchronous function and the instructions run until they are done
filesystem.writeFileSync('hello.txt','Hello world from NODE.js')

// node js is constantly executing so it checks everything in the priority queue
const array = [5000,50,70,100,20,20,10]

for (let item of array){
    setTimeout(()=>{
        console.log(item);
    }, item);
}

// databse reading must be async so it goes faster, it can retrieve 
// the most important data