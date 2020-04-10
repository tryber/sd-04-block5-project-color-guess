//  randomizar RGB:
function randomRGB(n) {
  return Math.floor(Math.random() * n);
}

//  randomizar as cores:
function randomColor() {
  return `rgb(${randomRGB(256)}, ${randomRGB(256)}, ${randomRGB(256)})`;
}

//  carregar a pagina inicial:

function inicio() {
  const rgbColor = document.getElementById('rgb-color');
  const colors = document.querySelectorAll('.ball');
  const answer = document.getElementById('answer');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = randomColor();
    answer.innerHTML = 'Escolha uma cor';
  }
  rgbColor.innerHTML = colors[randomRGB(colors.length)].style.backgroundColor;
}


inicio();
const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', inicio);

//  clicar na bola:
balls.addEventListener('click', (event) => {
const balls = document.getElementById('balls');
const score = document.getElementById('score');
const rgbColor = document.getElementById('rgb-color');

  if (event.target !== balls) {
    if (event.target.style.backgroundColor === rgbColor.innerHTML) {
      answer.innerHTML = 'Acertou!';
      points += 3;
      score.innerHTML = `Pontos: ${points}`;
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  }
});
let points = null;