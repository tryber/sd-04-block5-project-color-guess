function randomNumber(n) {
  return Math.floor(Math.random() * n);
}

function randomColor() {
  const r = randomNumber(256);
  const g = randomNumber(256);
  const b = randomNumber(256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
  const colors = document.querySelectorAll('.ball');
  for (let color of colors) {
    color.style.backgroundColor = randomColor();
  }
  rgbColor.innerHTML = colors[randomNumber(colors.length)].style.backgroundColor;
}

const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const colorsBlock = document.getElementById('colors');
const resetGame = document.getElementById('reset-game');

window.onload = () => {
  startGame();

  colorsBlock.addEventListener('click', (e) => {
    if (e.target !== colorsBlock) {
      if (e.target.style.backgroundColor === rgbColor.innerHTML) {
        answer.innerHTML = 'Acertou!';
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    }
  });
  resetGame.addEventListener('click', () => {
    answer.innerHTML = '';
    startGame();
  });
}
