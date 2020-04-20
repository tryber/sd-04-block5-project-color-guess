// Variables
const title = document.getElementById('title');
const rgbColor = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball')

// Generating random rgb
function generateRgb() {
  function random() {
    const random = Math.round(Math.random() * 255);
    return random;
  }
  const rgb = '(' + random() + ', ' + random() + ', ' + random() + ')';
  rgbColor.innerText = rgb;
}
//  
generateRgb();

// for (let i = 0; i < balls.length; i += 1) {
//   console.log(balls[i]);
//   balls[i].style.background = 
// }
