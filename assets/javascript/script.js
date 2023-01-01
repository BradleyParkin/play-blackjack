let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let blackJackWinner = false
let playerNoBlackJack = true


if (sum < 21) {
    console.log("Are you going to risk a new card?")
} else if (sum === 21) {
    console.log("OMG! You got blackjack! How lucky! Play again?")
    blackJackWinner = true
} else if (sum > 21) {
    console.log("Ooooo! Unlucky this time! You're bust!")
    playerNoBlackJack = false
}