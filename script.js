const colorToGuess = getRandomColor();
document.querySelector('#rgb-color').innerHTML = `(${colorToGuess.red}, ${colorToGuess.green}, ${colorToGuess.blue})`;

const colorAnsContainer = document.querySelector('#color-answers');
const colorAnswers = generateAnswers(colorToGuess, 5);
for (const color in colorAnswers) {
  if (colorAnswers.hasOwnProperty(color)) {
    const colorData = colorAnswers[color];
    const colorAnsElement = document.createElement('div');
    colorAnsElement.className = 'ball';
    colorAnsElement.style.backgroundColor = `rgb(${colorData.red}, ${colorData.green}, ${colorData.blue})`;

    colorAnsContainer.appendChild(colorAnsElement);
  }
}

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

function generateAnswers(correctAnswer, numberOfAnswers) {
  const answers = [];
  const correctAnswerPostion = randomNumber(numberOfAnswers);
  answers[correctAnswerPostion] = correctAnswer;
  for (let i = 0; i < numberOfAnswers; i += 1) {
    if (i !== correctAnswerPostion) answers[i] = getRandomColor();
  }

  return answers;
}
