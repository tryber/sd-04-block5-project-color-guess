let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
const rgbValue = document.getElementById('rgb-color')

rgbValue.innerHTML = `(${r}, ${g}, ${b})`