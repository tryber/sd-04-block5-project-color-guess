let colorToGuess = getRandomColor();
document.querySelector('#rgb-color').innerHTML = `(${colorToGuess.red}, ${colorToGuess.green}, ${colorToGuess.blue})`;
if (localStorage.length) {
  document.querySelector('#score').textContent = localStorage.getItem('score');
}

generateAnswers(colorToGuess, 6);

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', () => {
  const colorAnsContainer = document.querySelector('#color-answers');
  while (colorAnsContainer.lastChild) {
    colorAnsContainer.lastChild.remove();
  }

  colorToGuess = getRandomColor();
  document.querySelector('#rgb-color').innerHTML = `(${colorToGuess.red}, ${colorToGuess.green}, ${colorToGuess.blue})`;
  generateAnswers(colorToGuess, 6);
});

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
  const colorAnsContainer = document.querySelector('#color-answers');
  const answers = [];
  const correctAnswerPostion = randomNumber(numberOfAnswers);
  answers[correctAnswerPostion] = correctAnswer;
  for (let i = 0; i < numberOfAnswers; i += 1) {
    if (i !== correctAnswerPostion) answers[i] = getRandomColor();
  }

  for (const answer of answers) {
    const colorAnsElement = document.createElement('div');
    colorAnsElement.className = 'ball';
    colorAnsElement.style.backgroundColor = `rgb(${answer.red}, ${answer.green}, ${answer.blue})`;
    colorAnsElement.addEventListener('click', (e) => {
      document.querySelector('#answer').innerHTML = checkAnswer(e.target);
    });

    colorAnsContainer.appendChild(colorAnsElement);
  }
}

function checkAnswer(answer) {
  const selectedColorStyle = answer.style.backgroundColor;
  const correctAnswer = `rgb(${colorToGuess.red}, ${colorToGuess.green}, ${colorToGuess.blue})`;
  let result = null;
  if (selectedColorStyle === correctAnswer) {
    increaseScore(3);
    result = 'Acertou!';
  } else {
    decreaseScore(1);
    result = 'Errou! Tente novamente!';
  }

  return result;
}

function increaseScore(points) {
  let currentScore = 0;
  if (localStorage.length) {
    currentScore = Number(localStorage.getItem('score'));
  }
  currentScore += points;
  localStorage.setItem('score', currentScore);
  document.querySelector('#score').innerHTML = currentScore;
}

function decreaseScore(points) {
  let currentScore = 0;
  if (localStorage.length) {
    currentScore = Number(localStorage.getItem('score'));
  }
  currentScore -= points;
  localStorage.setItem('score', currentScore);
  document.querySelector('#score').innerHTML = currentScore;
}
