function computerPlay() {
    const gameArray = ['rock', 'paper', 'scissors'];
    return gameArray[Math.floor(Math.random() * gameArray.length)];
}

function playRound(computer, player) {
    const comp = computer.toLowerCase();
    const pl = player.toLowerCase();
    
    if (comp === pl) {
        return "It's a tie! 🤝 We both chose " + computer + ". Let's replay this round.";
    }
    
    if (
        (pl === "paper" && comp === "rock") ||
        (pl === "scissors" && comp === "paper") ||
        (pl === "rock" && comp === "scissors")
    ) {
        return "✅ Damn!! You took the round.. " + pl + " wins " + comp;
    } else {
        return "❌ Oooh Yeah.. " + comp + " beats " + pl + ". Got you!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    let maxRounds = 5;
    console.log("%c--- NEW GAME STARTED ---", "color: green; font-weight: bold; font-size: 14px;");
    alert("Welcome to the Rock, Paper, Scissors Arena! Get ready to battle against the computer. \nFirst to win 5 rounds wins the game. \nGood luck!\n\nTip: Open the Console to follow the game! (Ctrl+Shift+I)\n\n(Press Cancel at any time to quit)");
        
    while (round <= maxRounds) {
        let playerSelection = prompt(
            `Round ${round}/${maxRounds}\nScore: ${playerScore}-${computerScore}\nChoose:\nRock 🤟🏼, Paper 🧻, Scissors ✂️\n\n(Press Cancel to quit)`
        );        
        
        if (playerSelection === null) {
            alert("👋 You escaped the arena. Game ended.");
                        console.log("Game exited by user.");
                        console.log("Type game() to play again!");
                        return;                
        }  
        while (
            playerSelection === "" || 
            !['rock', 'paper', 'scissors'].includes(playerSelection.trim().toLowerCase())
        ) {
            playerSelection = prompt(
                '⚠️ Invalid input!\nType "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!\n\n(Press Cancel to quit)'
            );

            // 🚪 Cancel still exits here
            if (playerSelection === null) {
                alert("👋 You escaped the arena. Game ended.");
                console.log("Game exited by user.");
                return;
            }
        }

        let computerSelection = computerPlay();
        let roundResult = playRound(computerSelection, playerSelection.trim());
        
        console.log(roundResult);
        
        //update score
        if (roundResult.includes("You took the round")) {
            playerScore++;
        } else if (roundResult.includes("beats")) {
            computerScore++;
        }
        
        alert(roundResult + "\nScore: Player " + playerScore + " - Computer " + computerScore);
    
        round++;
    }

    if (playerScore > computerScore) {
        alert(`🏆 YOU WIN AFTER ${maxRounds} ROUNDS: ${playerScore}-${computerScore}`);
    } else if (computerScore > playerScore) {
        alert(`💀 YOU LOSE AFTER ${maxRounds} ROUNDS: ${computerScore}-${playerScore}`);
    } else {
        alert(`🤝 IT'S A DRAW AFTER ${maxRounds} ROUNDS: ${playerScore}-${computerScore}`);
    }
    console.log("%cGame finished. Type game() to play again!", "color: orange; font-style: italic;");
    alert("Game finished. Type game() in the console to play again!");
}

game();