// Gerar cores
const balls = document.querySelectorAll('.ball');
const array = [];

function random() {
  const numero = [Math.floor(Math.random() * (0 + 256)) + 0];
  return numero;
}

// mudar as cores das esferas
function ballsGenerate() {
  for (let i = 0; i < balls.length; i = i + 1) {
    const cor = (random() + ', ' + random() + ', ' + random());
    balls[i].style.backgroundColor = 'rgb('+cor+')';
    array.push(cor);
    console.log(cor);
    }
    const rgbColor = array[Math.floor(array.length * Math.random())];
    console.log(rgbColor);
    const textColor = document.getElementById('rgb-color');
    const rgbNum = '('+rgbColor+')';
    textColor.innerHTML = rgbNum;
  }

function btnBalls() {
  for (let i = 0; i < balls.length; i = i + 1) {

  }
}



window.onload = function() {
  ballsGenerate();
}
