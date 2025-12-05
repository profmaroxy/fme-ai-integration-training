// Move hero image left-right
let img = document.getElementById("heroImage");
let pos = 0;
let direction = 1;

function moveImage() {
    if(pos > 300 || pos < 0) direction *= -1;
    pos += direction;
    img.style.left = pos + "px";
    requestAnimationFrame(moveImage);
}

moveImage();