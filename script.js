let i;
let score = 0;
const butReset = document.getElementById('reset-game');
const elRgbColor = document.getElementById('rgb-color');
const balls = document.getElementsByClassName('ball');
const elAnswer = document.getElementById('answer');
const elScore = document.getElementById('score');

function randomRgb() {
  const randomNumber1 = Math.floor(Math.random() * 257);
  const randomNumber2 = Math.floor(Math.random() * 257);
  const randomNumber3 = Math.floor(Math.random() * 257);

  return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

function randomRgbBall() {
  const randomIndex = Math.floor(Math.random() * 6);

  balls[randomIndex].style.backgroundColor = `rgb${elRgbColor.innerText}`;
}

function randomRgbBalls() {
  for (i = 0; i < balls.length; i += 1) {
    if (balls[i].style.backgroundColor !== `rgb${elRgbColor.innerText}`) {
      balls[i].style.backgroundColor = randomRgb();
    }
  }
}

butReset.addEventListener('click', function () {
  elRgbColor.innerText = randomRgb().slice(3);

  randomRgbBall();
  randomRgbBalls();
});

for (i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', function (e) {
    if (e.target.style.backgroundColor.slice(3) === elRgbColor.innerText) {
      elAnswer.innerText = 'Acertou!';
      score += 3;
      elScore.innerText = score;
    } else {
      elAnswer.innerText = 'Errou! Tente novamente!';
    }
  });
}

elRgbColor.innerText = randomRgb().slice(3);

randomRgbBall();
randomRgbBalls();
