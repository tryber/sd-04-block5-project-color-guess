const rgbColor = document.getElementById('rgb-color');
function rgbRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

rgbColor.innerHTML = rgbRandom();
const balls = document.querySelectorAll('.ball');

function insertRandomColors() {
  const colorIndex = Math.floor(Math.random() * 5);
  for (let i = 0; i < balls.length; i += 1) {
    if (i === colorIndex) {
      balls[i].style.backgroundColor = `rgb${rgbColor.innerHTML}`;
    } else {
      balls[i].style.backgroundColor = `rgb${rgbRandom()}`;
    }
  }
}

insertRandomColors();

function verifyColor(element) {
  const guessedColor = element.style.backgroundColor;
  if (guessedColor === `rgb${rgbColor.innerHTML}`) return true;
  return false;
}

const p = document.getElementById('answer');
p.innerHTML = 'Escolha uma cor';
let placar = 0;
const placarElement = document.getElementById('score');
placarElement.innerHTML = `Placar = ${placar}`;
const selectColor = document.getElementById('select-color');
selectColor.addEventListener('click', function () {
  if (verifyColor(event.target)) {
    p.innerHTML = 'Acertou!';
    placar += 3;
    placarElement.innerHTML = `Placar = ${placar}`;
  } else p.innerHTML = 'Errou! Tente novamente!';
});

const buttonReset = document.getElementById('reset-game');
buttonReset.addEventListener('click', function () {
  rgbColor.innerHTML = rgbRandom();
  insertRandomColors();
  p.innerHTML = 'Escolha uma cor';
});
