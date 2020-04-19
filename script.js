const paragraph = document.getElementById('rgb-color');
const divs = document.querySelectorAll('.ball');
const divMae = document.querySelector('.flexbox');
const resposta = document.getElementById('answer');
const bckpResposta = resposta.textContent;
const botaoReiniciar = document.getElementById('reset-game');


function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return rColor = `(${r}, ${b}, ${g})`;
}
let arrayBolas = [0, 1, 2, 3, 4, 5];
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

function removeWinner() {
  for (let i = 0; i < divs.length; i += 1) {
    if (divs[i].classList.contains('winner')) {
      divs[i].classList.remove('winner');
    }
  }
}
console.log(divs);

window.onload = function () {
  randomColor();
  bolaPremiada();
  colorirBolas();
  divMae.addEventListener('click', function (event) {
    if (event.target.classList.contains('ball') && event.target.classList.contains('winner')) {
      resposta.innerHTML = 'Acertou!';
    } else {
      resposta.innerHTML = 'Errou! Tente novamente!';
    }
  })
  botaoReiniciar.addEventListener('click', function () {
    removeWinner();
    randomColor();
    bolaPremiada();
    colorirBolas();
    resposta.textContent = bckpResposta;
  })
}

