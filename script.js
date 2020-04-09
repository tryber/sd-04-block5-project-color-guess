const divColors = document.getElementById('colors')
const resetColors = document.getElementById('reset-game')
const answer = document.getElementById('answer');
const score = document.getElementById('score');

resetColors.addEventListener('click', () => {
  divColors.innerHTML = '';
  addCircles();
  getElementColor();
  answer.innerHTML = '';
})
function randomColor(){
  return Math.floor(Math.random()*257);
}

function addCircles() {
  for (let i = 0; i < 6; i += 1){
    let color = document.createElement('div');
    color.className = 'circles'
    color.addEventListener('click', checkColor);
    color.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    divColors.appendChild(color);
  }
}
addCircles();

function getElementColor() {
  document.getElementById('rgb-color').innerHTML = document.querySelectorAll('.circles')[Math.floor(Math.random() * 6)].style.backgroundColor;
}
getElementColor()

function checkColor(e){
  if(e.target.style.backgroundColor == document.getElementById('rgb-color').innerHTML){
    answer.innerHTML = 'Acertou!'
    score.innerHTML = Number(score.innerHTML) + 3
  } else {
    answer.innerHTML = 'Errou! Tente novamente!'
  }
}