// Leituras
const ball = document.getElementsByClassName('ball');
const colorGuess = document.getElementById('rgb-color');

// Gerando cor aleatória
function randomNumber (n) {
  return Math.floor(Math.random() * n);
}

function randomBoard () {
    ball[0].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ball[1].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
    ball[2].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
    ball[3].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
    ball[4].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
    ball[5].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
}

function inicial () {
  randomBoard;
  colorGuess.innerHTML = ball[this.randomNumber(5)];
}

window.onload = function () {
  inicial;
}


// Lendo entrada do Botão
let buttom = document.getElementById('reset');
buttom.addEventListener('click', function () {
  inicial;
})