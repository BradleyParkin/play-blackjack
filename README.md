# Can you beat the dealer? Blackjack!

This blackjack game is a game played where the user is given 2 cards at random, and then has the option to draw a new card with the chance of getting 21. If the users go over 21 they bust. They then have to restart the game.

![Responsive image](/assets/images/responsive.png)

# Features
* Top of the page
    * The page has a question asking the user "Can you beat the dealer?" Just to grab the interest of the user to see if they can get 21.
    * There are then the rules of the game, which are simple in that the user has to get 21 to beat the dealer, if they go over 21 they are bust and have to start again.

![top off the page image](/assets/images/top%20of%20page.png)   

* Main Game
    * At the top of the page some text will tell the user whether they have bust, need to choose another card or in fact, they have won and got blackjack.
    * There is then the hand's text, which shows the user the hands that have been generated, but also the extra hands that appear when the user asks for a new card.
    * There is also the score, which is the total sum of all cards shown to give the user their total score. 

![main game image](/assets/images/main%20game.png)

* Buttons
    * There are two buttons the user can press to play the game, the first being the START button, this will automatically generate the user 2 random cards.
    * The second button is if the user wants to play as their sum is not a total of 21, they can request another card.

![buttons image](/assets/images/buttons.png)

# Accessability

* I have chosen to use contrasting colors that make it easy for the user to see, these are Green, White, and Black. I felt these stand out the easiest on all screen sizes. 
* I have also chosen to use a simple font for all the text to make this easy for the reader to stand out. 

![accessability](/assets/images/accessability.png)

# Testing

* I have tested the game on multiple different browsers including Google, Firefox, and Safari. It has also been tested on multiple different devices for responsiveness including an iPhone 12 Pro Max and an Ipad Pro 12.9inch.
* I confirm this project is responsive, looks clear to the user, and functions on all standard screen sizes using the dev tools device bar on Google Chrome.
* I can confirm the buttons work to generate random cards. Once the user hits 21 or bust, they will no longer be able to request any more cards and will have to start the game again.

# Bugs

* The bug I was getting is the cards that are generated were showing up twice on my game, but I then realized I had entered the cards array twice, both on a function and the for loop showing them twice. Once this was removed the bug was fixed.

# Validator Testing
* **HTML**
    * No errors were found when passing through the official W3C HTML Validator
* **CSS**
    * No errors were found when passing through the official W3C CSS Validator
* **Javascript**
    * No significant issues were found when passing through the official JSHINT Validator

# Deployment

* The site was deployed to GitHub pages. The steps to deploy the site are:
    * In the GitHub repository, go to the Settings tab
    * From the source section drop-down menu, select Main Branch
    * Once the main branch has been selected, the page will provide the link to the completed website.

The live link can be found [here](https://bradleyparkin.github.io/play-blackjack/)      

# Credits

Content

* W3Schools for if statements. https://www.w3schools.com/js/js_if_else.asp
* Stack Overflow for Boolean/Logical Operators. https://stackoverflow.com/questions/20591876/why-are-logical-operators-in-javascript-left-associative
* W3Schools for how to properly use a function. https://www.w3schools.com/js/js_functions.asp
* w3Schools helped me understand the math. random and how to use it. https://www.w3schools.com/js/js_random.asp
* Code Institute on how to use an array - but also used this site for help on an empty array and how to push to an array. https://www.scaler.com/topics/empty-array-in-javascript/

Media

* Google fonts for fonts used https://fonts.google.com/