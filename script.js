const adivinhaRGB = document.getElementById('rgb-color'); // Manipula texto que exibe RGB.

function geraRGB() {
  const red = Number.parseInt(Math.random() * 255, 10);
  const green = Number.parseInt(Math.random() * 255, 10);
  const blue = Number.parseInt(Math.random() * 255, 10);
  const cor = `(${red},${green},${blue})`;
  adivinhaRGB.innerText = cor;
}

window.onload = function () {
  geraRGB();
};
