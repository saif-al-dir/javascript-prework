
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = 2; 
let playerMove = getMoveName(playerInput);


function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

// function return choice
function getMoveName(argMoveId) {
    if (argMoveId === 1) {
        return 'kamień';
    } else if (argMoveId === 2) {
        return 'papier';
    } else if (argMoveId === 3) {
        return 'nożyce';
    } else {
        return 'nieznany ruch';
    }
}
// Function show result
function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove); // Debugging
    if (argComputerMove === argPlayerMove) {
        printMessage('Remis! Obaj wybraliście ' + argComputerMove);
    } else if (
        (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') ||
        (argComputerMove === 'papier' && argPlayerMove === 'kamień') ||
        (argComputerMove === 'nożyce' && argPlayerMove === 'papier')
    ) {
        printMessage('Komputer wygrywa! ' + argComputerMove + ' pokonuje ' + argPlayerMove);
    } else {
        printMessage('Gratulacje! Wygrałeś! ' + argPlayerMove + ' pokonuje ' + argComputerMove);
    }
}

// Wywołanie funkcji displayResult z odpowiednimi argumentami
displayResult(computerMove, playerMove);