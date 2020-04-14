let balls;
let rgbColor;
let answer;
let resetButton;
let correctBall;
let score;

function randomColor() {
  const rgb = [];
  for (let i = 0; i < 3; i += 1) {
    rgb[i] = parseInt(Math.random() * 255, 10);
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function selectAnswer(event) {
  if (event.target === correctBall) {
    answer.innerText = 'Acertou!';
    score.innerText = parseInt(score.innerText, 10) + 3;
    correctBall = null;
  } else if (correctBall) {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function setColors() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomColor();
  }
}

function setRgbAnswer() {
  correctBall = balls[parseInt(Math.random() * balls.length, 10)];
  rgbColor.innerText = correctBall.style.backgroundColor.replace('rgb', '');
}

function startGame() {
  setColors();
  setRgbAnswer();
  answer.innerText = 'Escolha uma cor';
}

function setVariables() {
  balls = document.getElementsByClassName('ball');
  rgbColor = document.getElementById('rgb-color');
  answer = document.getElementById('answer');
  resetButton = document.getElementById('reset-game');
  score = document.getElementById('score');
}

function setEvents() {
  resetButton.addEventListener('click', startGame);
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', selectAnswer);
  }
}

window.onload = function () {
  setVariables();
  setEvents();
  startGame();
};
