// Variables
const title = document.getElementById('title');
const rgbColor = document.getElementById('rgb-color');

// Generating random rgb
function generateRgb() {
  function random() {
    const random = Math.round(Math.random() * 255);
    return random;
  }
  const rgb = '(' + random() + ', ' + random() + ', ' + random() + ')';
  console.log(rgb);
  rgbColor.innerText = rgb;
}
//  
generateRgb();