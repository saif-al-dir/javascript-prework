// Score tracking
let scores = {
    player: 0,
    computer: 0,
    draws: 0
};

const printMessage = function(msg, type) {
    let div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
    
    // Auto-remove messages after 5 seconds
    setTimeout(() => {
        div.style.opacity = '0';
        setTimeout(() => {
            if (div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }, 500);
    }, 5000);
}

const updateScore = function() {
    document.getElementById('player-score').textContent = scores.player;
    document.getElementById('computer-score').textContent = scores.computer;
    document.getElementById('draw-score').textContent = scores.draws;
}

const resetScores = function() {
    scores = {
        player: 0,
        computer: 0,
        draws: 0
    };
    updateScore();
    document.getElementById('messages').innerHTML = '';
    document.getElementById('choices-display').style.display = 'none';
    printMessage('Gra zresetowana!', 'draw');
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

// Function to get icon class for move
const getMoveIcon = function(moveName) {
    if (moveName === 'kamień') {
        return 'fas fa-hand-rock';
    } else if (moveName === 'papier') {
        return 'fas fa-hand-paper';
    } else if (moveName === 'nożyce') {
        return 'fas fa-hand-scissors';
    } else {
        return 'fas fa-question';
    }
}

// Function to display choices
const displayChoices = function(playerMove, computerMove) {
    const choicesDisplay = document.getElementById('choices-display');
    const playerIcon = document.getElementById('player-choice-icon');
    const computerIcon = document.getElementById('computer-choice-icon');
    const playerName = document.getElementById('player-choice-name');
    const computerName = document.getElementById('computer-choice-name');
    
    // Show the choices display
    choicesDisplay.style.display = 'flex';
    
    // Display player choice immediately
    playerIcon.innerHTML = `<i class="${getMoveIcon(playerMove)}"></i>`;
    playerName.textContent = playerMove;
    
    // Reset computer choice to question mark initially
    computerIcon.innerHTML = '<i class="fas fa-question"></i>';
    computerName.textContent = '?';
    
    // Reveal computer choice after a short delay
    setTimeout(() => {
        computerIcon.innerHTML = `<i class="${getMoveIcon(computerMove)}"></i>`;
        computerIcon.classList.add('reveal');
        computerName.textContent = computerMove;
        
        // Remove animation class after animation completes
        setTimeout(() => {
            computerIcon.classList.remove('reveal');
        }, 600);
    }, 1000);
}

// Function show result
const displayResult = function(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    
    if (argComputerMove === argPlayerMove) {
        scores.draws++;
        printMessage(`Remis! Obaj wybraliście ${argComputerMove}`, 'draw');
    } else if (
        (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') ||
        (argComputerMove === 'papier' && argPlayerMove === 'kamień') ||
        (argComputerMove === 'nożyce' && argPlayerMove === 'papier')
    ) {
        scores.computer++;
        printMessage(`Komputer wygrywa! ${argComputerMove} pokonuje ${argPlayerMove}`, 'lose');
    } else {
        scores.player++;
        printMessage(`Gratulacje! Wygrałeś! ${argPlayerMove} pokonuje ${argComputerMove}`, 'win');
    }
    
    updateScore();
}

// Function to trigger button animation
const animateButton = function(buttonId, animationClass) {
    const button = document.getElementById(buttonId);
    
    // Remove any existing animation classes
    button.classList.remove('rock-animation', 'paper-animation', 'scissors-animation', 'clicked');
    
    // Force a reflow to restart the animation
    void button.offsetWidth;
    
    // Add the new animation classes
    button.classList.add(animationClass, 'clicked');
    
    // Remove the animation classes after animation completes
    setTimeout(() => {
        button.classList.remove(animationClass, 'clicked');
    }, 600);
}