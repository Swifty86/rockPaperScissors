<script>
const rps = ['Rock', 'Paper', 'Scissors'];
let playerSelection
let computerSelection
let randomValue = rps[Math.floor(Math.random()*rps.length)];

function computerPlay() {
const random = Math.floor(Math.random() * rps.length);
console.log("Computer's choice = " + random)
return random;
}

function answer() {
    let answer = prompt("Let's play! Choose Rock, Paper, or Scissors!");
    console.log("Player's choice = " + answer);
    return answer;
}


function playerChoice() {
    prompt("Rock, Paper, Scissors?", "");
    return "";

}

let win = "Win!";
let lose = "Lose!";
let tie = "Tie.";

function playRound(playerChoice, computerSelection) {
    let computer = computerPlay()
    playerSelection = answer();
    computerSelection = computerPlay();


let input1 = "Rock";
let input2 = "Paper"
let input3 = "Scissors";

if(computerPlay.toLowerCase() == input1.toLowerCase()) {
    if (computerPlay.toLowerCase() === input2.toLowerCase()){
        return lose;
} else if (computerSelection.toLowerCase() === input3.toLowerCase()) {
    return win;

}else return tie;

} else if (playerSelection.toLowerCase() === input2.toLowerCase()) {

    if (computerSelection.toLowerCase() === input1.toLowerCase()) {

        return win;

  } else if (computerSelection.toLowerCase() === input3.toLowerCase()) {

       return lose;     
  }else return tie;

}} 

console.log(playRound());





   








</script>  
 