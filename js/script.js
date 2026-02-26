const playGame = function(playerInput) {
    // Clear previous messages
    document.getElementById('messages').innerHTML = '';
    
    // Trigger appropriate animation based on player choice
    if (playerInput === 1) {
        animateButton('play-rock', 'rock-animation');
    } else if (playerInput === 2) {
        animateButton('play-paper', 'paper-animation');
    } else if (playerInput === 3) {
        animateButton('play-scissors', 'scissors-animation');
    }
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    // Display choices
    displayChoices(playerMove, computerMove);
    
    // Show result after a delay (after computer choice is revealed)
    setTimeout(() => {
        displayResult(computerMove, playerMove);
    }, 1600);
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

document.getElementById('reset-game').addEventListener('click', resetScores);

// Initialize score display
updateScore();