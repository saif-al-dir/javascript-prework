let computerMove = 'kamień'; // Zmienna dla ruchu komputera
let playerMove = 'papier'; // Zmienna dla ruchu gracza

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}