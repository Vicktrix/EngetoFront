const inputNum = document.querySelector('#num');
const outputRes = document.querySelector('#res');
const guessTry = document.querySelector('#try');
const tryNew = document.querySelector('#tryNew');
tryNew.style.display = "none";
let numOfTries = 3;
inputNum.value = "";
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
	a = Number(a);
	if(!a) {
		outputRes.innerHTML = "This isn't number, try again";
		return ;
	}
	if(a<1 || a > 10) {
		outputRes.innerHTML = "You enter "+a+", try again from 1 to 10";
		return ;
	}
	if(a<randomNumber) {
		numOfTries--;
		outputRes.innerHTML = "You guess less, you have "+numOfTries+" tries";
		if(numOfTries==0) {
			gameOver()
		}
		return ;
	} 
	if(a>randomNumber) {
		numOfTries--;
		outputRes.innerHTML = "You guess over,you have "+numOfTries+" tries";
		if(numOfTries==0) {
			gameOver()
		}
		return ;
	}
	inputNum.value = "";
	outputRes.innerHTML = "Congratulation, You are win with "+(4-numOfTries)+" tries";
	tryNew.style.display = "inline";
	guessTry.style.display = "none";
	inputNum.value = "";
}
function gameOver() {
	if(numOfTries<=0) {
		outputRes.innerHTML = "Game over, try new Game";
		tryNew.style.display = "inline";
		guessTry.style.display = "none";
		inputNum.value = "";
	}
}