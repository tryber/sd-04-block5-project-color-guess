// random colors
function randomizeColors() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//  atribuindo cores
    const ball1 = document.getElementById('ball1'); ball1.style.backgroundColor = randomizeColors();
    const ball2 = document.getElementById('ball2'); ball2.style.backgroundColor = randomizeColors();
    const ball3 = document.getElementById('ball3'); ball3.style.backgroundColor = randomizeColors();
    const ball4 = document.getElementById('ball4'); ball4.style.backgroundColor = randomizeColors();
    const ball5 = document.getElementById('ball5'); ball5.style.backgroundColor = randomizeColors();
    const ball6 = document.getElementById('ball6'); ball6.style.backgroundColor = randomizeColors();

//  funcionalidade do botão reset

  const reset = document.getElementById('reset-game');
  reset.addEventListener('click', function () {
    ball1.style.backgroundColor = randomizeColors();
    ball2.style.backgroundColor = randomizeColors();
    ball3.style.backgroundColor = randomizeColors();
    ball4.style.backgroundColor = randomizeColors();
    ball5.style.backgroundColor = randomizeColors();
    ball6.style.backgroundColor = randomizeColors();
  })