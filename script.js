const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const colorsBlock = document.getElementById('colors');
const resetGame = document.getElementById('reset-game');

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
  answer.innerHTML = 'Escolha uma cor';
  // for (let color of colors) {
  //   color.style.backgroundColor = randomColor();
  // }
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = randomColor();
  }
  
  rgbColor.innerHTML = colors[randomNumber(colors.length)].style.backgroundColor;
}

resetGame.addEventListener('click', startGame)

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
};
