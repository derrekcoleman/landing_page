// RPS Game
function game() {
  // Generate the computer's choice
  function generateComputerChoice() {
    let computerChoice
    let rand = Math.random()
    if (rand < 0.3333333333333333) {
      computerChoice = 'rock'
    } else if (rand > 0.6666666666666666) {
      computerChoice = 'paper'
    } else {
      computerChoice = 'scissors'
    }
    console.log(`Computer choice is ${computerChoice}`)
    return computerChoice
  }
  let computerSelection = generateComputerChoice()

  // Prompt the user for a choice
  function acquireUserChoice() {
    let userChoice = prompt(`Do you pick Rock, Scissors, or Paper?`)
    let userChoiceLowerCase = userChoice.toLowerCase()
    console.log(`User choice is ${userChoiceLowerCase}`)
    return userChoiceLowerCase
  }
  let playerSelection = acquireUserChoice()

  // Determine the winner of the current round
  function playRound(playerSelection, computerSelection) {
    let winner
    // If same choice, tie
    if (playerSelection == computerSelection) {
      return (winner = 'none')
    }
    // If player wins, set winner to 'player'
    else if (
      (playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
      return (winner = 'player')
    }
    // If player loses, set winner to 'computer'
    else if (
      (computerSelection == 'rock' && playerSelection == 'scissors') ||
      (computerSelection == 'scissors' && playerSelection == 'paper') ||
      (computerSelection == 'paper' && playerSelection == 'rock')
    ) {
      return (winner = 'computer')
    }
    // Handle all other cases
    console.warn(`playerSelection is ${playerSelection}`)
    console.warn(`computerSelection is ${computerSelection}`)
    return console.error('A bug or edge case happened in playRound')
  }

  playRound(playerSelection, computerSelection)

  // Announce the winner
  // If user won, "You won!"
  // If computer won, "You lose."
}

game()
