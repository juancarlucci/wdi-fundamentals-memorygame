// components/Button/Button.js

import React from "react";

function handleClick(){
  var cards = [
    {
      rank: "queen",
      suit: "hearts",
      cardImage: "images/queen-of-hearts.png"
    },
    {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png"
    },
    {
      rank: "King",
      suit: "hearts",
      cardImage: "images/king-of-hearts.png"
    },
    {
      rank: "King",
      suit: "diamonds",
      cardImage: "images/king-of-diamonds.png"
    }
  ];

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

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute("src", cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    // cardsInPlay.push(cards[cardId]);

    if (cardsInPlay.length === 2) {
      checkForMatch();
    }
  }


  function createBoard() {
    for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement("img");
      cardElement.setAttribute("src", "images/back.png");
      cardElement.setAttribute("data-id", i);
      cardElement.addEventListener("click", flipCard);
      document.getElementById('game-board').appendChild(cardElement);

    }
  }
  createBoard();
}


const Button = props => {
  return <button onClick={() => props.handleClick()}>Refresh Game</button>;
};

export default Button;
