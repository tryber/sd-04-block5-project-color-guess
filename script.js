const balls = document.getElementsByClassName('ball');
const color = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const button = document.getElementById('restart');

let colorsArray = [];
let rightColor = '';

window.onload = function () {
  colorsArray = generateColors();
  rightColor = chooseRight(colorsArray);
  answer.innerHTML = 'Escolha uma cor';
  render();
};
button.addEventListener('click',()=>{
  colorsArray = generateColors();
  rightColor = chooseRight(colorsArray);
  answer.innerHTML = 'Escolha uma cor';
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
  if(tentativa===rightColor) {
    answer.innerHTML='Correto!';
  }
  else {
    answer.innerHTML='Resposta errada! Tente novamente';
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