let firstCard = produceRandom()
let secondCard = produceRandom()
let cardsTogether = [firstCard, secondCard] // array - ordered list of cards
let sum = firstCard + secondCard
let blackJackWinner = false
let playerNoBlackJack = true
let textOutput = ""
let textElement = document.getElementById("text-element")
let scoreElement = document.getElementById("score-element")
let handsElement = document.getElementById("hands-element")

function produceRandom() {
    return Math.floor( Math.random()*13 ) + 1
}

function beginGame() {
    showGame()
}

function showGame() {
    handsElement.textContent = "Hands: " 
    for (let i = 0; i < cardsTogether.length; i++) {
        handsElement.textContent += cardsTogether[i] + " "
    } 

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

function throwNewCard() {
    let card = produceRandom()
    sum += card
    cardsTogether.push(card)
    console.log(cardsTogether)
    showGame()
}

