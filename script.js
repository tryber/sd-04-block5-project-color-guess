const paragraph = document.getElementById('rgb-color');
const divs = document.querySelectorAll('.ball');
const divMae = document.querySelector('.flexbox');
const resposta = document.getElementById('answer');
const bckpResposta = resposta.textContent;
const botaoReiniciar = document.getElementById('reset-game');
let countScore = 0;
let arrayBolas = [0, 1, 2, 3, 4, 5];


function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rColor = `(${r}, ${b}, ${g})`;
  return rColor;
}

function bolaPremiada() {
  arrayBolas = [0, 1, 2, 3, 4, 5];
  paragraph.innerHTML = rColor;
  const index = Math.floor(Math.random() * 6);
  divs[index].style.backgroundColor = `rgb${rColor}`;
  divs[index].classList.add('winner');
  arrayBolas.splice(index, 1);

  return arrayBolas;
}

function colorirBolas() {
  for (let i = 0; i < 5; i += 1) {
    const index = Math.floor(Math.random() * (arrayBolas.length));
    const indexDiv = arrayBolas[index];
    divs[indexDiv].style.backgroundColor = `rgb${randomColor()}`;
    arrayBolas.splice(index, 1);
  }
}

function placar() {
  const score = document.getElementById('score');
  score.textContent = countScore;
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

function removeClasses() {
  for (let i = 0; i < divs.length; i += 1) {
    if (divs[i].classList.contains('winner')) {
      divs[i].classList.remove('winner');
    }
    if (divs[i].classList.contains('selected')) {
      divs[i].classList.remove('selected');
    }
  }
}

function reiniciarJogo() {
  removeClasses();
  randomColor();
  bolaPremiada();
  colorirBolas();
  resposta.textContent = bckpResposta;
}


function selectedBall() {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  if (event.target && event.target.classList.contains('ball')) {
    event.target.classList.add('selected');
  }
}

window.onload = function () {
  randomColor();
  bolaPremiada();
  colorirBolas();
  divMae.addEventListener('click', mouseEvent);
  botaoReiniciar.addEventListener('click', reiniciarJogo);
  divMae.addEventListener('click', selectedBall);
};
