console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);


if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You Found a Match!");
  } else {
    alert("Sorry try again");
  }
  
