const paragraph = document.getElementById('rgb-color');
const divs = document.querySelectorAll('.ball');
const divMae = document.getElementById('flexbox');
console.log(divs);


function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return rColor = `(${r}, ${b}, ${g})`
}
let arrayBolas = [0, 1, 2, 3, 4, 5];
function bolaPremiada() {
  let index = Math.floor(Math.random() * 6);
  divs[index].style.backgroundColor = `rgb${rColor}`;
  divs[index].classList.add('winner');
  arrayBolas.splice(index, 1);

  return arrayBolas
}

function colorirBolas() {
  for (let i = 0; i < 5; i += 1) {
    let index = Math.floor(Math.random() * (arrayBolas.length));
    let indexDiv = arrayBolas[index];
    divs[indexDiv].style.backgroundColor = `rgb${randomColor()}`;
    arrayBolas.splice(index, 1);
  }
}

// function clique(event) {
//   const resposta = document.getElementById('answer');
//   if (event.target.classList == 'winner') {
//     resposta.innerHTML = 'Acertou!';
//   }else {
//     resposta.innerHTML = 'Errou! Tente novamente!';
//   }
// }

window.onload = function () {
  randomColor();
  paragraph.innerHTML = rColor;
  this.bolaPremiada();
  this.colorirBolas();
  document.body.addEventListener('click', function(event) {
    const resposta = document.getElementById('answer');
    if (event.target.classList.contains('winner')) {
      resposta.innerHTML = 'Acertou!';
    }else {
      resposta.innerHTML = 'Errou! Tente novamente!';
    }
  })
}

