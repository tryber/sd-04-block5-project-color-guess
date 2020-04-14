window.onload = function(){

}// end of window.onload
const balls = document.querySelectorAll('.ball');
// return random number between 1 and 255
function aleatoire (){
	return Math.round(Math.random()*255);
}
//return a random color format rgb
function randomcolor (){
	return '('+ aleatoire() + ',' + aleatoire() + ','+ aleatoire() +')';
}
//function on click RESET button, active ballsGetRandomColor()
const resetGameElement = document.querySelector('#reset-game');
resetGameElement.addEventListener('click',button3changestyle);
function button3changestyle (){
	ballsGetRandomColor();
	document.querySelector('#answer').innerHTML = 'Escolha uma cor';
};
// function all ball get a random color and set one of the color to h2 in a text form 

function ballsGetRandomColor (){
const rgbColorElement = document.querySelector('#rgb-color');
let randomBall = Math.round(Math.random()*5) + 1;
console.log('randomBall',randomBall);
for (i = 0; i < balls.length; i += 1){
	let tempColor = randomcolor();
	balls[i].style.backgroundColor = 'rgb' + tempColor;
	if (randomBall == i) rgbColorElement.innerHTML = tempColor;
}
}
ballsGetRandomColor()
//function click on ball print a message 


// balls.addEventListener('click',button3changestyle);
// console.log('out');
// for (i = 1; i < 7 ; i += 1){
// function button3changestyle (){
// console.log('inside!');
// };
// };


