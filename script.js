let divColors = document.getElementById('colors')

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
  let answer = document.getElementById('answer');
  if(e.target.style.backgroundColor == document.getElementById('rgb-color').innerHTML){
    answer.innerHTML = 'Acertou!'
  } else {
    answer.innerHTML = 'Errou! Tente novamente!'
  }
}