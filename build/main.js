
var cards = ["queen", "queen", "king","king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];


// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId]);

  cardsInPlay.push(cards[cardId]);
  // cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }

}
flipCard(0);
flipCard(2);
