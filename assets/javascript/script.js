// array - ordered list of cards
let cardsTogether = [];
// sum is total cards added together 
let sum = 0;
// the boolean below is for the use of being able to draw a card if they have blackjack or not.
let blackJackWinner = false;
let playerNoBlackJack = false;
let textOutput = ""; // this shows the user wether they have got blackjack or not
let textElement = document.getElementById("text-element");
let scoreElement = document.getElementById("score-element");
let handsElement = document.getElementById("hands-element");

// this function will produce a randomly generated number for all cards options displayed.
function produceRandom() {
    // random number will generate a random number, with the if statement to show if it above 10, return 10. 
    // If it is 1, return 11 and any thing else return the number.
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

// this function is to start the game, which will show the first 2 cards chosen
// and then will also add those 2 cards together to give you your total.
function beginGame() {
    playerNoBlackJack = true;
    let firstCard = produceRandom();
    let secondCard = produceRandom();
    cardsTogether = [firstCard, secondCard];
    sum = firstCard + secondCard;
    showGame();
}

// this function is where the if statement will show a line of text
// depending on wether you have got blackjack or not
function showGame() {
    handsElement.textContent = "Hands: ";
    for (let i = 0; i < cardsTogether.length; i++) {
        handsElement.textContent += cardsTogether[i] + " ";
    } 
    // below is the if statement to show where the player is in the game.
    scoreElement.textContent = "Your Total Score: " + sum;
    if (sum < 21) {
        textOutput = "Are you going to risk a new card?";
    } else if (sum === 21) {
        textOutput = "OMG! You got blackjack! How lucky! Play again?";
        blackJackWinner = true;
    } else {
        textOutput = "Ooooo! Unlucky this time! You're bust! Play Again?";
        playerNoBlackJack = false;
    }  
    textElement.textContent = textOutput;
}

// this function is to throw a new card when the button is clicked if the user hasn't
// got blackjack yet.
function throwNewCard() {
    // the if statement below is using the boolean to chose if the user hasn't got black jack
    // they can throw another card, if they have it will not allow them to chose another card.
    if (playerNoBlackJack === true && blackJackWinner === false) {
        let card = produceRandom();
        sum += card;
        cardsTogether.push(card);
        console.log(cardsTogether);
        showGame();
    }   
}

