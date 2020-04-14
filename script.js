let balls;
let rgbColor;
let answer;
let resetButton;

function randomColor(){
 let rgb = [];
 for (let i = 0; i < 3; i+=1){
   rgb[i] = parseInt(Math.random() * 255, 10);
 } 
 return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

function setColors(){
  for( let i = 0; i <balls.length; i+= 1){
    balls[i].style.backgroundColor = randomColor();
  }
}

function startGame(){
  setColors();
}

function setVariables(){
  balls = document.getElementsByClassName('ball');
  rgbColor = document.getElementById('rgb-color');
  answer = document.getElementById("answer");
  resetButton = document.getElementById("reset-game");
}

function setEvents(){
  resetButton.addEventListener("click",startGame);
}

window.onload = function(){
  setVariables();
  setEvents();
  startGame();
}
