const balls = document.getElementsByClassName('ball');
const color = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const button = document.getElementById('reset-game');
const placar = document.getElementById('score');

let colorsArray = [];
let rightColor = '';
let score=0;
let click=false;

window.onload = function () {
  colorsArray = generateColors();
  rightColor = chooseRight(colorsArray);
  answer.innerHTML = 'Escolha uma cor';
  click=false;
  render();
};
button.addEventListener('click',()=>{
  colorsArray = generateColors();
  rightColor = chooseRight(colorsArray);
  answer.innerHTML = 'Escolha uma cor';
  click=false;
  render();
});

function generateColors(){
  let arr=[];
  let a=0,b=0,c=0;
  let str='';
  for(let i=0;i<6;i+=1){
    a=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
    c=Math.floor(Math.random()*255);
    str='rgb('+String(a)+', '+String(b)+', '+String(c)+')';
    arr.push(str);
  }
  return arr;
}

function chooseRight(arr){
  const a=Math.floor(Math.random()*5);
  return arr[a];
}

function verifyAnswer(){
  const tentativa = event.target.style.backgroundColor;
  if(tentativa===rightColor&&click===false) {
    click=true;
    answer.innerHTML='Acertou!';
    score+=3;
    placar.innerHTML=score;
  }
  else if(click===false) {
    answer.innerHTML='Errou! Tente novamente';
    answer.style.color='black';
  }
}

function render(){
  color.innerHTML=rightColor;
  for(let i=0;i<balls.length;i++){
    console.log(colorsArray[i]);
    balls[i].style.backgroundColor=colorsArray[i];
    balls[i].addEventListener('click', verifyAnswer);
  }
}