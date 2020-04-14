document.querySelector('#rgb-color');

function randomNumber(maxSize) {
  const number = Math.round(Math.random() * maxSize);

  return number;
}

function getRandomColor() {
  const red = randomNumber(255);
  const green = randomNumber(255);
  const blue = randomNumber(255);

  const rgbColor = {
    red,
    green,
    blue,
  };

  return rgbColor;
}
