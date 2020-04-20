function colorGenerate() {
  const x = [Math.floor(Math.random() * (0 + 256)) + 0];
  const y = [Math.floor(Math.random() * (0 + 256)) + 0];
  const z = [Math.floor(Math.random() * (0 + 256)) + 0];
  const rgbColor = ('(' + x + ', ' + y + ', ' + z + ')');
  const textColor = document.getElementById('rgb-color');
  textColor.innerHTML = rgbColor;
}

window.onload = colorGenerate;
