const gameArray = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let input = ""; 

//If the user writes something wrong
function isCancelled() {
    if (input === null || input === "" || !gameArray.includes(input.toLowerCase())) { 
        if (input === null) {
            input = prompt('You can not escape from me.. Choose wisely "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');
        } else {
            input = prompt('I am sure you know how to write three easy words.. It is "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');
        }
        return false; 
    } else {
        playerSelection = input.toLowerCase();
        return true;
    }
}

//A single round
function playRound(computer, player) {
    if (computer === player) {
        alert("It's a tie! 🤝 We both chose " + computer + ". Let's replay this round.");
        input = prompt("Quick! Choose again: Rock, Paper, or Scissors:");
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

//While score is not the one we want
while (playerScore < 5 && computerScore < 5) {
    input = prompt("Current Score: " + playerScore + "-" + computerScore + "\nChoose your weapon: Rock, Paper, or Scissors!");

    while (isCancelled() === false) { }
    
    let computerPlay = gameArray[Math.floor(Math.random() * gameArray.length)];
    playRound(computerPlay, playerSelection);
}

//Result
if (playerScore === 5) {
    alert("🏆 YOU WON THE GAME! FINAL SCORE: " + playerScore + "-" + computerScore);
} else {
    alert("💀 COMPUTER WON! FINAL SCORE: " + computerScore + "-" + playerScore);
}