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
