const gameArray = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let input = ""; 

game();

function isCancelled() {
    if (input === null || input === "" || !gameArray.includes(input.toLowerCase())) { 
        if (input === null) {
            input = prompt('You can not escape from me..' +  '\nChoose wisely "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');
        } else {
            input = prompt('I am sure you know how to write three easy words..' + '\nIt is "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');
        }
        return false; 
    } else {
        playerSelection = input.toLowerCase();
        return true;
    }
}



function playRound(computer, player) {
    if (computer === player) {
        alert("It's a tie! 🤝 We both chose " + computer + ". Let's replay this round.");
        input = prompt("Quick! Choose again: Rock 🤟🏼, Paper 🧻, or Scissors ✂️");
        while (isCancelled() === false) { }
        let newComputer = gameArray[Math.floor(Math.random() * gameArray.length)];
        return playRound(newComputer, playerSelection);
    }
    let roundMessage = "";
    if (
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper") ||
        (player === "rock" && computer === "scissors")
    ) {
        playerScore++;
        roundMessage = "✅ Damn!! You took the round.. " + player + " wins " + computer ;
    } else {
        computerScore++;
        roundMessage = "❌ Oooh Yeah.. " + computer + " beats " + player + ". Got you!";
    }
    console.log(roundMessage);
    alert(roundMessage + "\nScore: Player " + playerScore + " - Computer " + computerScore);
}

function game() {
    playerScore = 0;
    computerScore = 0;
    
    console.log("%c--- NEW GAME STARTED ---", "color: green; font-weight: bold;");

    while (playerScore < 5 && computerScore < 5) {
        input = prompt("New Game! First to 5 wins.\nCurrent Score: " + playerScore + "-" + computerScore + "\nChoose your weapon:" + '"\nRock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');

        while (isCancelled() === false) { }
        
        let computerPlay = gameArray[Math.floor(Math.random() * gameArray.length)];
        playRound(computerPlay, playerSelection);
    }

    if (playerScore === 5) {
        alert("🏆 YOU WON THE SET: " + playerScore + "-" + computerScore);
    } else {
        alert("💀 YOU LOST THE SET: " + playerScore + "-" + computerScore);
    }
    
    console.log("Game finished. Type game() to play again from 0-0.");
}

