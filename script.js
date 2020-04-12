// Leituras
const ball = document.getElementsByClassName('ball');
const colorGuess = document.getElementById('rgb-color');

// Gerando cor aleatória
function randomColor (n) {
  return Math.floor(Math.random() * n);
}

function randomBoard () {
  let array = [];
  for (let i = 0; i < 6; i += 1){
    array.push('rgb(' + randomColor(256) + ', ' + randomColor(256) + ', ' + randomColor(256) + ')');
  }
  return array;
}

function savingColor() {
  for (let i = 0; i < 6; i += 1){
    balls[i].style.backgroundColor = array[i];
  }
}

window.onload = function () {
  colorGuess.innerHTML = randomColor(6)
  randomBoard;
  savingColor;

}


// Lendo entrada do Botão
let buttom = document.getElementById('reset');
buttom.addEventListener('click', function () {
  randomBoard;
  savingColor;
})