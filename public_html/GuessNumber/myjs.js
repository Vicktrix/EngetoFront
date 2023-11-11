const inputNum = document.querySelector('#num');
const outputRes = document.querySelector('#res');
const guessTry = document.querySelector('#try');
const tryNew = document.querySelector('#tryNew');
tryNew.style.display = "none";
let numOfTries = 3;
let randomNumber = getRand();
guessTry.addEventListener('click', game);
tryNew.addEventListener('click', newGame);
function newGame() {
		outputRes.innerHTML = "";
		tryNew.style.display = "none";
		guessTry.style.display = "inline";
		randomNumber = getRand();
		console.log("random number = "+randomNumber);
		numOfTries = 3;
}
function getRand() {
	return Math.ceil(Math.random()*10);
}
function game() {
	console.log("random number = "+randomNumber);
	let a = inputNum.value.toString().trim();
	inputNum.value = "";
	a = Number(a);
	if(!a && a!=0){
		outputRes.innerHTML = "This isn't number, try again";
		return ;
	}
	if(a<1 || a>10){
		outputRes.innerHTML = "You enter "+a+", try again from 1 to 10";
		return ;
	}
	if(a<randomNumber){
		numOfTries--;
		outputRes.innerHTML = "You guess "+a+", it's less, you have "+numOfTries+" tries";
		if(numOfTries==0) gameOver("Game over, try new Game");
		return ;
	} 
	if(a>randomNumber) {
		numOfTries--;
		outputRes.innerHTML = "You guess "+a+", it's over,you have "+numOfTries+" tries";
		if(numOfTries==0) gameOver("Game over, try new Game");
		return ;
	}
	gameOver("Congratulation, You are win with "+(4-numOfTries)+" tries")
}
function gameOver(message) {
	outputRes.innerHTML = message;
	tryNew.style.display = "inline";
	guessTry.style.display = "none";
}