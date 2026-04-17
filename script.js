const gameArray = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let input = ""; 

function isCancelled(currentInput) {
    if (currentInput === null || currentInput === "" || !gameArray.includes(currentInput.toLowerCase())) { 
        return false; 
    }
    return true;
}

let playerScore = 0;
let computerScore = 0;

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
<<<<<<< Updated upstream
    let input = ""; // Τοπική μεταβλητή

    console.log("%c--- NEW GAME STARTED ---", "color: green; font-weight: bold;");
=======
    
    console.log("%c--- NEW GAME STARTED ---", "color: green; font-weight: bold;");

    // Χρησιμοποιούμε alert για να "ξυπνήσουμε" τον browser
    alert("Welcome to the Arena! 🏟️\nLet the game begin!");
>>>>>>> Stashed changes

    while (playerScore < 5 && computerScore < 5) {
        // Παίρνουμε την πρώτη τιμή
        let tempInput = prompt("Current Score: " + playerScore + "-" + computerScore + "\nChoose: Rock, Paper, or Scissors!");

        // Αν το tempInput είναι null επειδή ο browser "βιάστηκε", 
        // του δίνουμε μια δεύτερη ευκαιρία αμέσως πριν πάμε στην isCancelled
        if (tempInput === null) {
            tempInput = prompt("Don't leave yet! Please choose your weapon:");
        }

        input = tempInput; // Τώρα δίνουμε την τιμή στην παγκόσμια input

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
        alert("💀 YOU LOST THE SET: " + playerScore + "-" + computerScore);
    }
<<<<<<< Updated upstream
}

// Η "μαγική" λύση για το New Tab: 
// Περιμένουμε μισό δευτερόλεπτο πριν ξεκινήσουμε
setTimeout(() => {
    game();
}, 500);
=======
    
    console.log("Game finished. Type game() to play again from 0-0.");
}
game();
>>>>>>> Stashed changes
