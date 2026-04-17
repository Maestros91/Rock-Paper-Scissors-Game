const gameArray = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let input = ""; 

// Συνάρτηση για τον έλεγχο εγκυρότητας
function isCancelled() {
    if (input === null || input === "" || !gameArray.includes(input.toLowerCase())) { 
        if (input === null) {
            input = prompt('You can not escape from me.. 😈\nChoose wisely "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');
        } else {
            input = prompt('I am sure you know how to write three easy words.. ✍️\nIt is "Rock" 🤟🏼, "Paper" 🧻 or "Scissors" ✂️!');
        }
        return false; 
    } else {
        playerSelection = input.toLowerCase();
        return true;
    }
}

// Συνάρτηση για την εκτέλεση ενός γύρου
function playRound(computer, player) {
    const comp = computer.toLowerCase();
    const pl = player.toLowerCase();

    // Περίπτωση Ισοπαλίας
    if (comp === pl) {
        alert("It's a tie! 🤝 We both chose " + computer + ". Let's replay this round.");
        input = prompt("Quick! Choose again: Rock 🤟🏼, Paper 🧻, or Scissors ✂️");
        while (isCancelled() === false) { }
        let newComputer = gameArray[Math.floor(Math.random() * gameArray.length)];
        return playRound(newComputer, playerSelection);
    }

    // Λογική Αποτελέσματος
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

// Η κύρια συνάρτηση του παιχνιδιού
function game() {
    // Μηδενισμός σκορ για κάθε νέα κλήση της game()
    playerScore = 0;
    computerScore = 0;
    
    console.log("%c--- NEW GAME STARTED ---", "color: green; font-weight: bold; font-size: 14px;");

    // Η ΔΙΚΗ ΣΟΥ ΙΔΕΑ: Το Alert που "αναγκάζει" τον browser να εστιάσει στη σελίδα
    alert("Welcome to the Arena! 🏟️\nPress OK to start the battle!");

    while (playerScore < 5 && computerScore < 5) {
        // Παίρνουμε την πρώτη τιμή από τον χρήστη
        let tempInput = prompt("Current Score: " + playerScore + "-" + computerScore + "\nChoose your weapon:\nRock 🤟🏼, Paper 🧻 or Scissors ✂️!");

        // Διπλή ασφάλεια για το New Tab bug:
        // Αν ο browser "βιαστεί" και επιστρέψει null, ξαναρωτάμε αμέσως
        if (tempInput === null && playerScore === 0 && computerScore === 0) {
            tempInput = prompt("The Arena is ready! Please type Rock, Paper or Scissors to begin:");
        }

        input = tempInput;

        // Έλεγχος αν η λέξη είναι σωστή (isCancelled)
        while (isCancelled() === false) { }
        
        let computerPlay = gameArray[Math.floor(Math.random() * gameArray.length)];
        playRound(computerPlay, playerSelection);
    }

    // Τελικό Αποτέλεσμα
    if (playerScore === 5) {
        alert("🏆 YOU WON THE SET: " + playerScore + "-" + computerScore);
    } else {
        alert("💀 YOU LOST THE SET: " + computerScore + "-" + playerScore);
    }
    
    console.log("%cGame finished. Type game() to play again!", "color: orange; font-style: italic;");
}

// Αυτόματη εκκίνηση
game();