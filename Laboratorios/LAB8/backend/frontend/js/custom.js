function genImg(ruta, alt) {
    return '<img src="' + ruta + '" alt="'+ alt + '">';
}

function mostrarGato() {
    let div_imagen = document.getElementById("imagen");
    let ruta_imagen = "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=1";
    let alt_imagen = "Imagen de gato";
    
    div_imagen.innerHTML = genImg(ruta_imagen, alt_imagen);
}

document.getElementById("perro").onclick = () => {
    let div_imagen = document.getElementById("imagen");
    let ruta_imagen = "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=1";
    let alt_imagen = "Imagen de perro";
    
    div_imagen.innerHTML = genImg(ruta_imagen, alt_imagen);
}

function limpiar_imagen() {
    document.getElementById("imagen").innerHTML = "";
    div_comadreja.onclick = mostrar_comadreja;
}

function mostrar_comadreja() {
    let div_imagen = document.getElementById("comadreja");
    let ruta_imagen = "https://images.pexels.com/photos/5403275/pexels-photo-5403275.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=1";
    let alt_imagen = "Imagen de comadreja";
    
    div_imagen.innerHTML = genImg(ruta_imagen, alt_imagen);
    div_comadreja.onclick = limpiar_imagen;
}

let div_comadreja = document.getElementById("comadreja");
div_comadreja.onclick = mostrar_comadreja;

document.getElementById("favorita").onkeyup = () => {
    document.getElementById("respuesta_favorita").innerHTML = "Vacuna tu" + document.getElementById("favorita").value + " en una veterinaria";
}