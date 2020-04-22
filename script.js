randomRgb = () => {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

check = (element) => {
  const color = document.querySelector('.rgbColor');
  element.style.backgroundColor == color.innerHTML ? correctAnswer() : wrongAnswer();
}

createCircle = () => {
  const divBalls = document.querySelector('#balls');
  for (let index = 0; index < 6; index += 1){ 
    const createBalls = document.createElement('span');
    createBalls.addEventListener('click', () => {
      check(createBalls);
    });
    createBalls.className = 'ball';
    createBalls.style.backgroundColor = randomRgb();
    divBalls.appendChild(createBalls);
  }  
}

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', () => {
  window.location.reload()
});

getRandomRgb = () => {
  const divRgb = document.querySelector('#rgb-color');
  const color = document.createElement('p');
  color.className = 'rgbColor';
  const ball = document.querySelectorAll('.ball');
  color.innerHTML = ball[Math.floor(Math.random()* 6)].style.backgroundColor;
  divRgb.appendChild(color);
}

correctAnswer = () => {
  const textAnswer = document.querySelector('#answer-text');
  textAnswer.innerHTML = "Acertou!";

}

wrongAnswer = () => {
  const textAnswer = document.querySelector('#answer-text');
  textAnswer.innerHTML = "Errou! Tente novamente!";

}

createCircle();
getRandomRgb();

