// Leituras
const ball = document.getElementsByClassName('ball');
const colorGuess = document.getElementById('rgb-color');
const resultado = document.getElementById('answer');

// Gerando cor aleatória
function randomNumber(n) {
  return Math.floor(Math.random() * n);
}

function randomBoard() {
  ball[0].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
  ball[1].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
  ball[2].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
  ball[3].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
  ball[4].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
  ball[5].style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
}

function inicial() {
  randomBoard();
  colorGuess.innerHTML = ball[randomNumber(5)].style.backgroundColor;
  resultado.innerHTML = 'Escolha uma cor!';
}

window.onload = function () {
  inicial();
};

function conferencia() {
  resultado.innerHTML = '';
  const cor = event.target.style.backgroundColor;
  if (cor === colorGuess.innerText) {
    resultado.innerHTML = 'Acertou!';
  } else {
    resultado.innerHTML = 'Errou! Tente novamente!';
  }
}

// Lendo entrada do Botão
const buttom = document.getElementById('reset-game');
buttom.addEventListener('click', inicial);

// Add event listener para as cores
for (let i = 0; i < 6; i += 1) {
  ball[i].addEventListener('click', conferencia);
}
