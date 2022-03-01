# NPM for website

## Tips

### Locally install the packages

```powershell
npm install --save-dev nodemon
npm install --save express
```

Thankfully if you install locally, you'll be able to see the changes in versions to see when a update made it break.

### Check the package.json

```json
{
  "name": "lab11",
  "version": "1.0.0",
  "description": "Laboratorio 11",
  "main": "index.js",
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/felix-rojas/tc2005b-felix.git"
  },
  "author": "Felix",
  "license": "MIT",
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
}
```

### Do not version the files in node_modules

This creates redundancies since we just need to do npm install after cloning so it automatically installs all the dependencies using the JSON file

## Middleware

Express is designed as a composite pattern and you can instantiate middlewares to add new functions to our website. We can simply add middleware to add more routes and whatnot. 

### Instantiating middle-wares

``` js
// instantiate middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    //moves to next middleware
    next(); 
});
```

### Last middle-ware

``` js
app.use((request, response, next) => {
    console.log('Middleware!');
    //stops *all* middleware
    request.send(); 
});
```
