const gameArray = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

function isCancelled(currentInput) {
    if (currentInput === null || currentInput === "" || !gameArray.includes(currentInput.toLowerCase())) { 
        return false; 
    }
    return true;
}

function playRound(computer, player) {
    const comp = computer.toLowerCase();
    const pl = player.toLowerCase();

    if (comp === pl) {
        alert("It's a tie! 🤝 We both chose " + computer + ". Let's replay this round.");
        let inputTie = prompt("Quick! Choose again: Rock 🤟🏼, Paper 🧻, or Scissors ✂️");
        
        while (!isCancelled(inputTie)) {
            if (inputTie === null) {
                inputTie = prompt('You can not escape! 😈\nChoose: Rock, Paper or Scissors!');
            } else {
                inputTie = prompt('Wrong word! ✍️\nChoose: Rock, Paper or Scissors!');
            }
        }
        playerSelection = inputTie.toLowerCase();
        let newComputer = gameArray[Math.floor(Math.random() * gameArray.length)];
        return playRound(newComputer, playerSelection);
    }

    let roundMessage = "";
    if ((pl === "paper" && comp === "rock") || (pl === "scissors" && comp === "paper") || (pl === "rock" && comp === "scissors")) {
        playerScore++;
        roundMessage = "✅ Damn!! You took the round.. " + pl + " wins " + comp;
    } else {
        computerScore++;
        roundMessage = "❌ Oooh Yeah.. " + comp + " beats " + pl + ". Got you!";
    }
    
    console.log(roundMessage);
    alert(roundMessage + "\nScore: Player " + playerScore + " - Computer " + computerScore);
}

function game() {
    playerScore = 0;
    computerScore = 0;
    let input = ""; // Τοπική μεταβλητή

    console.log("%c--- NEW GAME STARTED ---", "color: green; font-weight: bold;");

    while (playerScore < 5 && computerScore < 5) {
        input = prompt("New Game! First to 5 wins.\nCurrent Score: " + playerScore + "-" + computerScore + "\nChoose your weapon:\nRock 🤟🏼, Paper 🧻 or Scissors ✂️!");

        // Έλεγχος εγκυρότητας απευθείας εδώ για να μην μπερδεύεται το global input
        while (!isCancelled(input)) {
            if (input === null) {
                input = prompt('You can not escape! 😈\nRock, Paper or Scissors?');
            } else {
                input = prompt('Check your spelling! ✍️\nRock, Paper or Scissors?');
            }
        }
        
        playerSelection = input.toLowerCase();
        let computerPlay = gameArray[Math.floor(Math.random() * gameArray.length)];
        playRound(computerPlay, playerSelection);
    }

    if (playerScore === 5) {
        alert("🏆 YOU WON THE SET: " + playerScore + "-" + computerScore);
    } else {
        alert("💀 YOU LOST THE SET: " + computerScore + "-" + playerScore);
    }
}

// Η "μαγική" λύση για το New Tab: 
// Περιμένουμε μισό δευτερόλεπτο πριν ξεκινήσουμε
setTimeout(() => {
    game();
}, 500);
