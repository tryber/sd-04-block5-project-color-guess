const adivinhaRGB = document.getElementById('rgb-color'); // Manipula texto que exibe RGB.
const bolas = document.querySelectorAll('.ball'); // Manipula as bolas de cores.

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

function geraRGB() {
  const red = Number.parseInt(Math.random() * 255, 10);
  const green = Number.parseInt(Math.random() * 255, 10);
  const blue = Number.parseInt(Math.random() * 255, 10);
  const cor = `(${red},${green},${blue})`;
  return cor;
}

function configuraRGB() {
  adivinhaRGB.innerText = geraRGB();
}

window.onload = function () {
  configuraRGB();
  atribuiCores();
};
