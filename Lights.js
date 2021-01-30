const on = "images/Light_on.png";
const off = "images/Light_off.png"

document.getElementById("image").style.height = "300px"

function on_func(){
    var image = document.getElementById('image');
    image.src = on;
}

function off_func(){
    var image = document.getElementById('image');
    image.src = off;
}