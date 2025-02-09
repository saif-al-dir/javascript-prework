{

    const playGame = function(playerInput) {

        let randomNumber = Math.floor(Math.random() * 3 + 1);
        let computerMove = getMoveName(randomNumber);
        let playerMove = getMoveName(playerInput);
    
        displayResult(computerMove, playerMove);
    }
    
    const printMessage = function(msg){
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }
    
    // function return choice
    const getMoveName = function(argMoveId) {
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
    const displayResult = function(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
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
    
    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1); // Kamień
    });
    
    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2); // Papier
    });
    
    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3); // Nożyce
    });

}