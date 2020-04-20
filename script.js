const colorOne = document.querySelector('#color-one');
const colorTwo = document.querySelector('#color-two');
const colorThree = document.querySelector('#color-three');
const colorFour = document.querySelector('#color-four');
const colorFive = document.querySelector('#color-five');
const colorSix = document.querySelector('#color-six');

const textoRGB = document.querySelector('#rgb-color');
const colorPainel = document.querySelector('#colors');
const resposta = document.querySelector('#answer');
const ball = document.querySelectorAll('.ball');
const btnReinicia = document.querySelector('#reset-game');

function sortColor() {
  colorOne.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorTwo.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorThree.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorFour.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorFive.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
  colorSix.style.backgroundColor = `rgb(${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)},${Number.parseInt(Math.random() * 255, 10)})`;
}
 
function apagaClass() {
    colorOne.className = 'ball';
    colorTwo.className = 'ball';
    colorThree.className = 'ball';
    colorFour.className = 'ball';
    colorFive.className = 'ball';
    colorSix.className = 'ball';
  }

  function colorCorrect(){
    for(i = 0; i < ball.length; i += 1){
    let texto = ((ball[(Number.parseInt(Math.random() * (6 - 1) + 1))].style.backgroundColor).toString()).replace('rgb', '');
      textoRGB.innerHTML = texto;
      
    }

  }
  function testaValor(a, b){
    if(a != b) {
      resposta.innerHTML = 'Errou! Tente novamente';
  } else {
      resposta.innerHTML = 'Resposta correta!';
   }
  }

  sortColor();
  colorCorrect();
 
  colorOne.addEventListener('click', function () {
    apagaClass();
    colorOne.className = 'ball selected';

    let textoSelecionado = colorOne.style.backgroundColor.toString().replace('rgb', '');
    testaValor(textoSelecionado, textoRGB.innerHTML);
  });

  colorTwo.addEventListener('click', function () {
    apagaClass();
    colorTwo.className = 'ball selected';

    let textoSelecionado = colorTwo.style.backgroundColor.toString().replace('rgb', '');
    testaValor(textoSelecionado, textoRGB.innerHTML);
  });

  colorThree.addEventListener('click', function () {
    apagaClass();
    colorThree.className = 'ball selected';

    let textoSelecionado = colorThree.style.backgroundColor.toString().replace('rgb', '');
    testaValor(textoSelecionado, textoRGB.innerHTML);
  });

  colorFour.addEventListener('click', function () {
    apagaClass();
    colorFour.className = 'ball selected';

    let textoSelecionado = colorFour.style.backgroundColor.toString().replace('rgb', '');
    testaValor(textoSelecionado, textoRGB.innerHTML);
  });

  colorFive.addEventListener('click', function () {
    apagaClass();
    colorFive.className = 'ball selected';

    let textoSelecionado = colorFive.style.backgroundColor.toString().replace('rgb', '');
    testaValor(textoSelecionado, textoRGB.innerHTML);
  });

  colorSix.addEventListener('click', function () {
    apagaClass();
    colorSix.className = 'ball selected';

    let textoSelecionado = colorSix.style.backgroundColor.toString().replace('rgb', '');
    testaValor(textoSelecionado, textoRGB.innerHTML);
  });

btnReinicia.addEventListener('click', function(){
  sortColor();
  apagaClass();
  colorCorrect()
  resposta.innerHTML = 'Escolha uma cor';
})