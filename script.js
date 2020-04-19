var rgbColor = document.querySelector("#rgb-color");
var balls = document.querySelectorAll(".ball");
var answer = document.querySelector("#answer");

function generateColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  const rightColor = "(" + r + "," + g + "," + b + ")";

  return rightColor;
}

//   function mainColor(){
for (let i = 0; i < balls.length; i++) {
  balls[i].style.backgroundColor = "rgb" + generateColor();

  //   }
}

var corEscolhida = balls[Math.floor(Math.random() * balls.length)];
console.log(corEscolhida);
rgbColor.innerHTML = corEscolhida.style.backgroundColor;

for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener("click", function () {
    console.log("Tudo dando certo");
    console.log(balls[i].style.backgroundColor);
    console.log(corEscolhida.style.backgroundColor);
    if (balls[i].style.backgroundColor === corEscolhida.style.backgroundColor) {
      console.log(true);
      answer.innerHTML = "Acertou!"
    } else {
      console.log(false);
      answer.innerHTML = "Errou!"
    }
  });
}
