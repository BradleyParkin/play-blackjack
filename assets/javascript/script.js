let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let blackJackWinner = false
let playerNoBlackJack = true
let textOutput = ""
let textElement = document.getElementById("text-element")
let scoreElement = document.getElementById("score-element")
let handsElement = document.getElementById("hands-element")


function beginGame() {
    handsElement.textContent = "Hands: " + firstCard + " " + secondCard
    scoreElement.textContent = "Your Total Score: " + sum
    if (sum < 21) {
        textOutput = "Are you going to risk a new card?"
    } else if (sum === 21) {
        textOutput = "OMG! You got blackjack! How lucky! Play again?"
        blackJackWinner = true
    } else if (sum > 21) {
        textOutput = "Ooooo! Unlucky this time! You're bust! Play Again?"
        playerNoBlackJack = false
    }  
    textElement.textContent = textOutput
}

