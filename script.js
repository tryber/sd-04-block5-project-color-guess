
let rightColor = '';
const rgbValue = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');

answer.innerHTML = 'Escolha uma cor';

for (let i = 0; i < 3; i += 1) {
  let randomic = Math.floor(Math.random() * 256);
  rightColor += `${randomic},`;
}
rightColor = rightColor.substr(0, rightColor.length - 1);
rgbValue.innerHTML = `(${rightColor})`;

let color = '';
for (let i = 0; i < 6; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    let randomic = Math.floor(Math.random() * 256);
    color += `${randomic},`;
  }
  color = color.substr(0, color.length - 1);
  balls[i].style.backgroundColor = `rgb(${color})`;
  color = '';
}

const correctBall = Math.floor(Math.random() * 6);
balls[correctBall].style.backgroundColor = `rgb(${rightColor})`;

for (let i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', () => {
    if (balls[i].style.backgroundColor === balls[correctBall].style.backgroundColor) {
      answer.innerHTML = 'Acertou!';
    }
    else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}
