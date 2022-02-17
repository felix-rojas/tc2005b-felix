# Javascript notes

Nunca declarar variables de manera global con `var`, declarar con `let`:

``` javascript
// local variable, if unspecified, js makes it global
let numero_cervezas = 0;

console.log(numero_cervezas) 
console.info(numero_cervezas)
console.warn(numero_cervezas)
console.error(numero_cervezas)
```

## Experimento for loop

### Variable Local

```javascript 
for (let i = 1; i <=10; i++){
    console.log(i);
}
console.log(i)
```

### Variable Global

```javascript
for (var j = 1; i <=10; i++){
    console.log(j);
}
console.log(j)
```

## Declaracion de funciones

### Funciones tradicionales

```javascript
function apologize() {
    console.log("Sorry about that");
}
if (answer == true) {
    apologize();
}
```

### Funciones anónimas

Las funciones anónimas son útiles para programación orientada a eventos. Esto genera múltiples funciones y es difícil darle seguimiento a todas.

```javascript
// modern functions
// creates a pointer to a function
const modern_apology = () => console.log("Machines don't apoogize");
modern_apology(); // execute function
```

### Funciones comunes

```javascript
document.getElementById()
```

La función `document.getElementById()` nos permite modificar un elemento de la página al forzar un evento.

### Ejemplos

```javascript
document.getElementById("body").onclick =  modern_apology;
document.getElementById("body").onclick = () =>  confirm("Stop that");
```
