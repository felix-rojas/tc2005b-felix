// put route and its alternative caption and embed it 
function showContent(route, alt){
    return div_image.innerHTML = '<img src="' + img_route + '"alt="' + alt_image + '">';
}

function cleanImage() {
    document.getElementById("foto").innerHTML="";
    div_ferret.onclick = showFerret;
}

function showFerret(){
    console.log("Click to open content");
    let div_image = document.getElementById("foto");
    let img_route = "https://images.pexels.com/photos/403933/pexels-photo-403933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
    let alt_image = "Photograph of a cat"
    
    div_image.innerHTML = showContent(img_route,alt_image);
}

function showCat(){
    console.log("Click to open content");
    let div_image = document.getElementById("foto");
    let img_route = "https://images.pexels.com/photos/403933/pexels-photo-403933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
    let alt_image = "Photograph of a cat"
    
    div_image.innerHTML = showContent(img_route,alt_image);

}

document.getElementById("ferret").onclick = () => {
    showContent();
}
