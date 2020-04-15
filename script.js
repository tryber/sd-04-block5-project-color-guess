const colorRgb = document.getElementById('rgb-color');
const ballSection = document.getElementById('section-ball');
const answer = document.getElementById('answer');
const gameReset = document.getElementById('reset-game');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');


function getRandColor() {  //   https://www.it-swarm.dev/pt/javascript/gerador-de-cores-aleatorias/967183954/#5
  const rgb = [parseInt(Math.random() * 256), parseInt(Math.random() * 256), parseInt(Math.random() * 256)];
  return rgb;
};
let show = getRandColor()

const palette = [b1, b2, b3, b4, b5, b6];

for (let i = 0; i < 6; i += 1){
    let k = getRandColor();
    palette[i].style.backgroundColor = `rgb(${k[0]}, ${k[1]}, ${k[2]})`;
}

const randomColor = palette[Math.floor(Math.random() * palette.length)];  //https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
colorRgb.innerHTML = randomColor.style.backgroundColor.replace('rgb','');

function showColor(e){
  if (e.target.style.backgroundColor == randomColor.style.backgroundColor){
    answer.innerHTML = ("Acertou!");
  } else answer.innerHTML = ("Errou! Tente novamente!");
}
ballSection.addEventListener('click', showColor);


gameReset.addEventListener('click', function(){
  document.location.reload(true);
});

// console.log(k);
// console.log(`rgb(${k[0]}, ${k[1]}, ${k[2]})`);
// console.log(randomColor);

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const randomMonth = months[Math.floor(Math.random() * months.length)];
// console.log("random month =>", randomMonth);                                                                                                                                                                                                            



// function embaralha(lista) { //http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/

//     for (let indice = lista.length; indice; indice--) {

//         const indiceAleatorio = Math.floor(Math.random() * indice);
        
//         // guarda de um índice aleatório da lista
//         const elemento = lista[indice - 1];
        
//         lista[indice - 1] = lista[indiceAleatorio];
        
//         lista[indiceAleatorio] = elemento;
//     }
// }
