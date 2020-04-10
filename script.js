const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const colorsBlock = document.getElementById('colors');
const resetGame = document.getElementById('reset-game');
// Functions
function randomNumber(n) {
  return Math.floor(Math.random() * n);
}
function randomColor() {
  return `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
}
function startGame() {
  const colors = document.querySelectorAll('.ball');
  answer.innerHTML = 'Escolha uma cor';
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = randomColor();
  }
  rgbColor.innerHTML = colors[randomNumber(colors.length)].style.backgroundColor;
}
// Start the game!
startGame();
resetGame.addEventListener('click', startGame); // ReStart the game

colorsBlock.addEventListener('click', (e) => {
  if (e.target !== colorsBlock) {
    if (e.target.style.backgroundColor === rgbColor.innerHTML) {
      answer.innerHTML = 'Acertou!';
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  }
});
