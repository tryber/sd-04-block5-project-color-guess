const rgbColor = document.querySelector('.rgb-color');
const balls = document.querySelectorAll('.ball');

// Generate random color
function genRandomRGB() {
  const max = 255;
  return `(${Math.round(Math.random() * max)}, ${Math.round(Math.random() * max)}, ${Math.round(Math.random() * max)})`;
}

// Set random rgb code to h2
function setRandomRGB() {
  rgbColor.innerHTML = genRandomRGB();
}

// Set random color to color balls
function setBallsRandomColor() {
  balls.forEach((ball) => {
    ball.style.background = `rgb${genRandomRGB()}`;
  });
}

// Set right color to single ball
function setRightColor() {
  balls[Math.round(Math.random() * 5)].style.background = `rgb${rgbColor.innerHTML}`;
}

// Function calls
setRandomRGB();
setBallsRandomColor();
setRightColor();
