let cardsTogether = [] // array - ordered list of cards
let sum = 0
let blackJackWinner = false
let playerNoBlackJack = false
let textOutput = ""
let textElement = document.getElementById("text-element")
let scoreElement = document.getElementById("score-element")
let handsElement = document.getElementById("hands-element")

function produceRandom() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function beginGame() {
    playerNoBlackJack = true
    let firstCard = produceRandom()
    let secondCard = produceRandom()
    cardsTogether = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    if (playerNoBlackJack === true && blackJackWinner === false) {
        let card = produceRandom()
        sum += card
        cardsTogether.push(card)
        console.log(cardsTogether)
        showGame()
    }   
}

