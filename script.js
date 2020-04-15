window.onload = function(){

}// end of window.onload
const balls = document.querySelectorAll('.ball');
const rgbColorElement = document.querySelector('#rgb-color');
// return random number between 1 and 255
function aleatoire (){
	return Math.round(Math.random()*255);
}
//return a random color format rgb
function randomcolor (){
	return '('+ aleatoire() + ', ' + aleatoire() + ', '+ aleatoire() +')';
}
//function on click RESET button, active ballsGetRandomColor()
const resetGameElement = document.querySelector('#reset-game');
resetGameElement.addEventListener('click',button3changestyle);
function button3changestyle (){
	ballsGetRandomColor();
	console.log('Hello click');
	document.querySelector('#answer').innerHTML = 'Escolha uma cor';
};
// function all ball get a random color and set one of the color to h2 in a text form 
function ballsGetRandomColor (){
let randomBall = Math.round(Math.random()*5);
//console.log('randomBall',randomBall);
for (i = 0; i < balls.length; i += 1){
	let tempColor = randomcolor();
	balls[i].style.backgroundColor = 'rgb' + tempColor;
	//console.log('i',i,balls[i].style.backgroundColor);
	if (randomBall == i) {
		//console.log('igual !!',balls[i].style.backgroundColor, tempColor);
		rgbColorElement.innerHTML = tempColor;
	}
}
}
ballsGetRandomColor()
//function click on ball print a message 
document.body.addEventListener('click', function (event) {
	const classname = event.target.className;
	const targetbackground = event.target.style.backgroundColor;
	testComparison = targetbackground == 'rgb' + rgbColorElement.innerHTML;
	if (targetbackground == 'rgb' + rgbColorElement.innerHTML && classname.includes('ball')) {
		document.querySelector('#answer').innerHTML = 'Acertou!';
	}
	else if (targetbackground !== 'rgb' + rgbColorElement.innerHTML && classname.includes('ball')) {
		document.querySelector('#answer').innerHTML = 'Errou! Tente novamente!';
		//console.log('loop errou');
	}
})




