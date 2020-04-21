const butReset = document.getElementById('reset-game');
const elRgbColor = document.getElementById('rgb-color');

function randomRGB() {
  const randomNumber1 = Math.floor(Math.random() * 257);
  const randomNumber2 = Math.floor(Math.random() * 257);
  const randomNumber3 = Math.floor(Math.random() * 257);

  elRgbColor.innerText = `(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

butReset.addEventListener('click', randomRGB);

window.onload = function () {
  randomRGB();
};
