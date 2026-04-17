const gameArray = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

function isCancelled() {
    if (input === null || input === "" || !gameArray.includes(input.toLowerCase())) { 
        if (input === null) {
            input = prompt('You can not escape from me.. \nChoose wisely "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');
        } else {
            input = prompt('I am sure you know how to write three easy words.. \nIt is "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');
        }
        return false; 
    } else {
        playerSelection = input.toLowerCase();
        return true;
    }
}

function playRound(computer, player) {
    const comp = computer.toLowerCase();
    const pl = player.toLowerCase();

    if (comp === pl) {
        alert("It's a tie! 🤝 We both chose " + computer + ". Let's replay this round.");
        input = prompt("Quick! Choose again: Rock 🤟🏼, Paper 🧻, or Scissors ✂️");
        
        while (isCancelled() === false) { }
        
        let newComputer = gameArray[Math.floor(Math.random() * gameArray.length)];
        return playRound(newComputer, playerSelection);
    }

    let roundMessage = "";
    if (
        (pl === "paper" && comp === "rock") ||
        (pl === "scissors" && comp === "paper") ||
        (pl === "rock" && comp === "scissors")
    ) {
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
    let input = ""; 
    playerScore = 0;
    computerScore = 0;
    
    console.log("%c--- NEW GAME STARTED ---", "color: green; font-weight: bold; font-size: 14px;");

    while (playerScore < 5 && computerScore < 5) {
        input = prompt("New Game! First to 5 wins.\nCurrent Score: " + playerScore + "-" + computerScore + "\nChoose your weapon:\nRock 🤟🏼, Paper 🧻 or Scissors ✂️!");

        while (isCancelled() === false) { }
        
        let computerPlay = gameArray[Math.floor(Math.random() * gameArray.length)];
        playRound(computerPlay, playerSelection);
    }

    if (playerScore === 5) {
        alert("🏆 YOU WON THE SET: " + playerScore + "-" + computerScore);
    } else {
        alert("💀 YOU LOST THE SET: " + computerScore + "-" + playerScore);
    }
    
    console.log("%cGame finished. Type game() to play again from 0-0.", "color: orange; font-style: italic;");
}
game();
