const paragraph = document.getElementById('rgb-color');
const divs = document.querySelectorAll('.ball');
const divMae = document.querySelector('.flexbox');
const resposta = document.getElementById('answer');
const bckpResposta = resposta.textContent;
const botaoReiniciar = document.getElementById('reset-game');
let countScore = 0;
let arrayBolas = [0, 1, 2, 3, 4, 5];


function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return rColor = `(${r}, ${b}, ${g})`;
}

function bolaPremiada() {
  arrayBolas = [0, 1, 2, 3, 4, 5];
  paragraph.innerHTML = rColor;
  let index = Math.floor(Math.random() * 6);
  divs[index].style.backgroundColor = `rgb${rColor}`;
  divs[index].classList.add('winner');
  arrayBolas.splice(index, 1);

  return arrayBolas;
}

function colorirBolas() {
  for (let i = 0; i < 5; i += 1) {
    let index = Math.floor(Math.random() * (arrayBolas.length));
    let indexDiv = arrayBolas[index];
    divs[indexDiv].style.backgroundColor = `rgb${randomColor()}`;
    arrayBolas.splice(index, 1);
  }
}

function mouseEvent(event) {
  if (event.target.classList.contains('ball') && event.target.classList.contains('winner')) {
    resposta.innerHTML = 'Acertou!';
    countScore += 3;
    placar();
  } else {
    resposta.innerHTML = 'Errou! Tente novamente!';
  }
}

function reiniciarJogo() {
  removeWinner();
  randomColor();
  bolaPremiada();
  colorirBolas();
  resposta.textContent = bckpResposta;
}

function removeWinner() {
  for (let i = 0; i < divs.length; i += 1) {
    if (divs[i].classList.contains('winner')) {
      divs[i].classList.remove('winner');
    }
  }
}

function placar() {
  const score = document.getElementById('score');
  score.textContent = countScore;
}

window.onload = function () {
  randomColor();
  bolaPremiada();
  colorirBolas();
  divMae.addEventListener('click', this.mouseEvent)
  botaoReiniciar.addEventListener('click', this.reiniciarJogo)
}

