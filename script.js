const balls = document.getElementsByClassName('ball');
const color = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const button = document.getElementById('reset-game');
const placar = document.getElementById('score');

let colorsArray = [];
let rightColor = '';
let score = 0;

function generateColors() {
  const arr = [];
  let a = 0;
  let b = 0;
  let c = 0;
  let str = '';
  for (let i = 0; i < 6; i += 1) {
    a = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    c = Math.floor(Math.random() * 255);
    str = `rgb(${String(a)}, ${String(b)}, ${String(c)})`;
    arr.push(str);
  }
  return arr;
}

function chooseRight(arr) {
  const a = Math.floor(Math.random() * 5);
  return arr[a];
}

function verifyAnswer() {
  const tentativa = event.target.style.backgroundColor;
  if (tentativa === rightColor) {
    answer.innerHTML = 'Acertou!';
    score += 3;
    placar.innerHTML = score;
  } else {
    answer.innerHTML = 'Errou! Tente novamente';
    answer.style.color = 'black';
  }
}

function render() {
  color.innerHTML = rightColor;
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = colorsArray[i];
    balls[i].addEventListener('click', verifyAnswer);
  }
}

function init() {
  colorsArray = generateColors();
  rightColor = chooseRight(colorsArray);
  answer.innerHTML = 'Escolha uma cor';
  render();
}

window.onload = function () {
  init();
};
button.addEventListener('click', () => {
  init();
});
