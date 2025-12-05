// Select the image
const image = document.getElementById('movieImage');

// Set initial position and direction
let position = 0;
let direction = 1; // 1 = right, -1 = left

function moveImage() {
    // Update position
    position += direction * 2; // change speed here

    // Change direction if it reaches window edges
    if (position > window.innerWidth - image.width || position < 0) {
        direction *= -1;
    }

    // Apply position
    image.style.left = position + 'px';

    // Repeat animation
    requestAnimationFrame(moveImage);
}

// Start moving image
moveImage();