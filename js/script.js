
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = randomNumber; 
let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');



function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

if (playerMove < 1 || playerMove > 3) {
    printMessage('Nieznany ruch! Proszę wybierz 1, 2 lub 3.');
} else {
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

    if (computerMove === playerMove) {
        printMessage('Remis!');
    } else if (computerMove === 1 && playerMove === 2) {
        printMessage('Ty wygrywasz!');
    } else if (computerMove === 1 && playerMove === 3) {
        printMessage('Ty przegrywasz!');
    } else if (computerMove === 2 && playerMove === 1) {
        printMessage('Ty przegrywasz!');
    } else if (computerMove === 2 && playerMove === 3) {
        printMessage('Ty wygrywasz!');
    } else if (computerMove === 3 && playerMove === 1) {
        printMessage('Ty wygrywasz!');
    } else if (computerMove === 3 && playerMove === 2) {
        printMessage('Komputer wygrywa!');
    }
}