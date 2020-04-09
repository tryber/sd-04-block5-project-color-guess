const divColors = document.getElementById('colors');
const resetColors = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const score = document.getElementById('score');

function randomColor() {
  return Math.floor(Math.random() * 257);
}

function getElementColor() {
  document.getElementById('rgb-color').innerHTML = document.querySelectorAll('.ball')[Math.floor(Math.random() * 6)].style.backgroundColor;
}

function checkColor(e) {
  if (e.target.style.backgroundColor === document.getElementById('rgb-color').innerHTML) {
    answer.innerHTML = 'Acertou!';
    score.innerHTML = Number(score.innerHTML) + 3;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function addCircles() {
  for (let i = 0; i < 6; i += 1) {
    const color = document.createElement('div');
    color.className = 'ball';
    color.addEventListener('click', checkColor);
    color.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    divColors.appendChild(color);
  }
}

addCircles();

getElementColor();

resetColors.addEventListener('click', () => {
  divColors.innerHTML = '';
  answer.innerHTML = 'Escolha uma cor';
  addCircles();
  getElementColor();
  
});
