const adivinhaRGB = document.getElementById('rgb-color'); // Manipula texto que exibe RGB.
const answer = document.getElementById('answer');
const bolas = document.querySelectorAll('.ball'); // Manipula as bolas de cores.

function geraRGB() {
  const red = Number.parseInt(Math.random() * 255, 10);
  const green = Number.parseInt(Math.random() * 255, 10);
  const blue = Number.parseInt(Math.random() * 255, 10);
  const cor = `(${red}, ${green}, ${blue})`;
  return cor;
}

function atribuiCores() {
  const comprimento = bolas.length;
  const corCorreta = Number.parseInt(Math.floor(Math.random() * 6), 10);
  bolas[corCorreta].style.backgroundColor = `rgb${adivinhaRGB.innerText}`;
  for (let b = 0; b < comprimento; b += 1) {
    if (bolas[b].style.backgroundColor === '') {
      bolas[b].style.backgroundColor = `rgb${geraRGB()}`;
    }
  }
}

function configuraRGB() {
  adivinhaRGB.innerText = geraRGB();
}

function clickBall() {
  const cor = event.target.style.backgroundColor;
  if (cor === `rgb${adivinhaRGB.innerText}`) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function eventCores() {
  for (let i = 0; i < bolas.length; i += 1) {
    bolas[i].addEventListener('click', clickBall);
  }
}

window.onload = function () {
  configuraRGB();
  atribuiCores();
  eventCores();
};
