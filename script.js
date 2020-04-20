// Variables
const title = document.getElementById('title');
const rgbColor = document.getElementById('rgb-color');
const ballsContainer = document.getElementById('ballsContainer');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');

// Generating a random number multiple of 255 
function random() {
  const random = Math.round(Math.random() * 255);
  return random;
}
// Generating random rgb
function generateRgb() {
  const rgb = '(' + random() + ', ' + random() + ', ' + random() + ')';
  rgbColor.innerText = rgb;
}
// Comparing user's answer and the correct one
for (let i = 0; i < balls.length; i += 1) {
  balls[i].style.cursor = 'pointer';
  balls[i].addEventListener('click', function (e) {
    let correctAnswer = rgbColor.innerText;
    correctAnswer = 'rgb' + correctAnswer;
    const userAnswer = e.target.style.backgroundColor;

    if (userAnswer === correctAnswer) {
      answer.innerText = 'Acertou!';
      console.log("correctAnswer");
    } else {
      answer.innerText = 'Errou! Tente novamente';
      console.log("wrongAnswer");
    }
  });
}
// Generating balls background color
function ballsBgColor() {
  let randomNumber = Math.floor(Math.random() * balls.length)// Random number between 0 and 5
  for (let i = 0; i < balls.length; i += 1) {
    if (i === randomNumber) {// To put the answer in a random ball
      let correctAnswer = rgbColor.innerText;
      correctAnswer = 'rgb' + correctAnswer;
      balls[i].style.backgroundColor = correctAnswer;
      console.log(randomNumber)
    } else {
      const rgb = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
      balls[i].style.backgroundColor = rgb;
    }
  }
}
// Restart button
reset.addEventListener('click', function () {
  answer.innerText = "";
  generateRgb();
  ballsBgColor();
})
// To do when load window
window.onload = function () {
  generateRgb();
  ballsBgColor();
}
