const rgbColor = document.getElementById('rgb-color');
function rgbRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

rgbColor.innerHTML = rgbRandom();
const balls = document.querySelectorAll('.ball');
const colorIndex = Math.floor(Math.random() * 5);
for (let i = 0; i < balls.length; i += 1) {
  if (i === colorIndex){
    balls[i].style.backgroundColor = `rgb${rgbColor.innerHTML}`;
  }  else {
    balls[i].style.backgroundColor = `rgb${rgbRandom()}`;
  }
}

function verifyColor(element) {
  const  guessedColor = element.style.backgroundColor;
  if (guessedColor === `rgb${rgbColor.innerHTML}`) return true;
  else return false;
}

const p = document.createElement('p');
document.body.appendChild(p);
p.innerHTML = 'Escolha uma cor';
const selectColor = document.getElementById('select-color');
selectColor.addEventListener('click', function () {
  if (verifyColor(event.target)) p.innerHTML = 'Acertou!';
  else p.innerHTML = 'Errou! Tente novamente!';
});
