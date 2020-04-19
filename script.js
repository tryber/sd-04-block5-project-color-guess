const colorOne = document.querySelector('#color-one');
const colorTwo = document.querySelector('#color-two');
const colorThree = document.querySelector('#color-three');
const colorFour = document.querySelector('#color-four');
const colorFive = document.querySelector('#color-five');
const colorSix = document.querySelector('#color-six');

const textoRGB = document.querySelector('#rgb-color');
const colorPainel = document.querySelector('#colors');

function sortColor() {
    // const corAleatoria1 = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    // const randoColorTwo = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    // const randoColorGreen = arrayCores[Math.floor(Math.random() * arrayCores.length)];

  colorOne.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorTwo.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorThree.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorFour.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorFive.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorSix.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;

}

  sortColor();

  let texto = ((colorThree.style.backgroundColor).toString()).replace('rgb', '');

  textoRGB.innerHTML = texto;
  

  function apagaClass() {
    colorOne.className = 'ball';
    colorTwo.className = 'ball';
    colorThree.className = 'ball';
    colorFour.className = 'ball';
    colorFive.className = 'ball';
    colorSix.className = 'ball';
  }

  colorOne.addEventListener('click', function () {
    apagaClass();
    colorOne.className = 'ball selected';
  });

  colorTwo.addEventListener('click', function () {
    apagaClass();
    colorTwo.className = 'ball selected';
  });

  colorThree.addEventListener('click', function () {
    apagaClass();
    colorThree.className = 'ball selected';
  });

  colorFour.addEventListener('click', function () {
    apagaClass();
    colorFour.className = 'ball selected';
  });

  colorFive.addEventListener('click', function () {
    apagaClass();
    colorFive.className = 'ball selected';
  });

  colorSix.addEventListener('click', function () {
    apagaClass();
    colorSix.className = 'ball selected';
  });