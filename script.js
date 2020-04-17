const rgbColor = document.querySelector('.rgb-color');
const result = document.querySelector('.result');
const resetGame = document.querySelector('.reset-game');

// Generate random color
function genRandomRGB() {
  const max = 255;
  return `(${Math.round(Math.random() * max)}, ${Math.round(Math.random() * max)}, ${Math.round(Math.random() * max)})`;
}

// Set random rgb code to h2
function setRandomRGB() {
  rgbColor.innerHTML = genRandomRGB();
}

// Set right color to single ball
function setRightColor() {
  const balls = document.querySelectorAll('.ball');
  balls[Math.round(Math.random() * 5)].style.background = `rgb${rgbColor.innerHTML}`;
}

// Set random color to color balls
function setBallsRandomColor() {
  const balls = document.querySelectorAll('.ball');
  balls.forEach((ball) => {
    ball.style.background = `rgb${genRandomRGB()}`;
  });
  setRightColor();
}

// Check player selected color
function checkGuess() {
  const balls = document.querySelectorAll('.ball');
  balls.forEach((ball) => {
    ball.addEventListener('click', () => {
      const guess = ball.style.background;

      if (guess === `rgb${rgbColor.innerHTML}`) {
        result.innerHTML = 'Acertou!';
      } else {
        result.innerHTML = 'Errou! Tente novamente!';
      }
    });
  });
}

// Reset game
function reset() {
  resetGame.addEventListener('click', () => {
    setRandomRGB();
    setBallsRandomColor();
    result.innerHTML = 'Escolha uma cor';
  });
}

// Function calls
setRandomRGB();
setBallsRandomColor();
checkGuess();
reset();
