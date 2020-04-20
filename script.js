// Gerar cores
const balls = document.querySelectorAll('.ball');
const array = [];
const answerTwo = document.querySelector('.answerTwo');


function random() {
  const number = [Math.floor(Math.random() * (0 + 256)) + 0];
  return number;
}

// mudar as cores das esferas
function ballsGenerate() {
  // cria array com as cores 
  for (let i = 0; i < balls.length; i = i + 1) {
    const color = (random() + ', ' + random() + ', ' + random());
    balls[i].style.backgroundColor = 'rgb('+color+')';
    array.push(color);
    let a = balls[i].style.backgroundColor;
    console.log(a);
    }
    const rgbColor = array[Math.floor(array.length * Math.random())];
    // seleciona uma cor para colocar no parágrafo
    const textColor = document.getElementById('rgb-color');
    const rgbNum = '('+rgbColor+')';
    textColor.innerHTML = rgbNum; 

    for (let i = 0; i < balls.length; i = i + 1) {
      balls[i].addEventListener('click', function() {
        if ( balls[i].style.backgroundColor == 'rgb'+rgbNum) {
          answerTwo.innerHTML = 'Acertou!';
        }
        else {
          answerTwo.innerHTML = ('Errou! Tente novamente!');
        }
      });
    }
  }

window.onload = function() {
  ballsGenerate();
}

// const btnReset = document.getElementById('reset-game');
// btnReset.addEventListener('click',);
