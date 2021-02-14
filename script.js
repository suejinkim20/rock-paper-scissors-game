
//Play the Game

function playGame() {
    var choice = "";
    var gamePieces = ["R", "P", "S"]
    var randomChoice = "";

    //Keep track of wins, ties, losses
    var wins = 0;
    var ties = 0;
    var losses = 0;

    //Player choice
    function myChoice() {
        choice = prompt("R , P, or S?");
        //console.log(choice);
        console.log("User chooses " + choice);
    }
    myChoice()

    //Computer random choice
    function computerChoice() {
        randomChoice = gamePieces[Math.floor(Math.random() * computerChoice.length)];
        console.log("Computer chooses " + randomChoice);
    }
    computerChoice()

    //Compare user and computer choices
    function compareChoices() {
        if (choice == randomChoice) {
            console.log("You tied.");
            window.alert("You tied.");
            ties++;
        } 
        
        else if (choice == "R" && randomChoice == "S") {
            console.log("You win.");
            window.alert("You chose rock. Computer chose scissors. You win.");
            wins++;
        } 
        
        else if (choice == "R" && randomChoice == "P") {
            console.log("You lose.");
            window.alert("You chose rock. Computer chose paper. You lose.");
            losses++;
        } 
        
        else if (choice == "S" && randomChoice == "P") {
            console.log("You win.");
            window.alert("You chose scissors. Computer chose paper. You win.");
            wins++;
        } 
        
        else if (choice == "S" && randomChoice == "R") {
            console.log("You lose.");
            window.alert("You chose scissors. Computer chose rock. You lose.");
            losses++;
        } 
        
        else if (choice == "P" && randomChoice == "R") {
            console.log("You win.");
            window.alert("You chose paper. Computer chose rock. You win.");
            wins++;
        } 
        
        else if (choice == "P" && randomChoice == "S") {
            console.log("You lose.");
            window.alert("You chose paper. Computer chose scissors. You lose.");
            losses++;
        } 
        
        else {
            console.log("Try input again.");
            window.alert("Try input again.");
        }
    }
    compareChoices()

    alert("Stats: " + wins + " wins, " + losses + " losses, and " + ties + "ties.")

    var playAgain = confirm("Do you want to keep playing?");
        if (playAgain == true) {
            playGame()
        }
        else {
            alert("Thanks for playing!")
        }
}

playGame()

    

