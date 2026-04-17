const gameArray = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

// Αφαιρούμε την παγκόσμια μεταβλητή input και την ορίζουμε μόνο όπου χρειάζεται

function isValid(choice) {
    // Επιστρέφει true μόνο αν η επιλογή είναι έγκυρη
    return choice !== null && choice !== "" && gameArray.includes(choice.toLowerCase());
}

function getValidInput(msg) {
    let val = prompt(msg);
    
    // Όσο η είσοδος ΔΕΝ είναι έγκυρη
    while (!isValid(val)) {
        if (val === null) {
            val = prompt("You can't escape! 😈\nPlease enter Rock, Paper, or Scissors:");
        } else {
            val = prompt("Wrong spelling! ✍️\nType Rock, Paper, or Scissors:");
        }
    }
    return val.toLowerCase();
}

function playRound(computer, player) {
    if (computer === player) {
        alert("It's a tie! 🤝 We both chose " + computer);
        let newInput = getValidInput("Quick! Tie-breaker! Choose again:");
        let newComputer = gameArray[Math.floor(Math.random() * gameArray.length)];
        return playRound(newComputer, newInput);
    }

    let roundMessage = "";
    if ((player === "paper" && computer === "rock") || 
        (player === "scissors" && computer === "paper") || 
        (player === "rock" && computer === "scissors")) {
        playerScore++;
        roundMessage = "✅ Round Win! " + player + " beats " + computer;
    } else {
        computerScore++;
        roundMessage = "❌ Round Loss! " + computer + " beats " + player;
    }
    
    console.log(roundMessage);
    alert(roundMessage + "\nScore: " + playerScore + " - " + computerScore);
}

function game() {
    playerScore = 0;
    computerScore = 0;
    
    console.log("%c--- GAME STARTED ---", "color: green; font-weight: bold;");

    while (playerScore < 5 && computerScore < 5) {
        let currentInput = getValidInput("Score: " + playerScore + "-" + computerScore + "\nChoose your weapon: Rock, Paper, or Scissors!");
        
        let computerPlay = gameArray[Math.floor(Math.random() * gameArray.length)];
        playRound(computerPlay, currentInput);
    }

    if (playerScore === 5) {
        alert("🏆 CHAMPION! Final Score: " + playerScore + "-" + computerScore);
    } else {
        alert("💀 DEFEAT! Final Score: " + computerScore + "-" + playerScore);
    }
}

// Εκτέλεση
game();