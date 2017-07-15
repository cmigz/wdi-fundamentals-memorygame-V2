console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!!");
  } else {
    console.log("Sorry Try again yo");
  }
}

var flipCard = function(cardId) {
  console.log("User Flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2){
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
