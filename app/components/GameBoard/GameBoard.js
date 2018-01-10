// components/GameBoard/GameBoard.js

import React from "react";
import "./game-board-style";
import CardList from "../CardList/CardList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";


let cards = [
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

Array.prototype.memory_card_shuffle = function() {
  var i = this.length, j, temp;
  while(--i > 0) {
    j = Math.floor(Math.random() * (i = 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

var cardsInPlay = [];

// var cardOne = cards[0];
// var cardTwo = cards[1];

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
var gameBoardElement = document.getElementById('game-board');
var parentBoard = document.getElementById('parentBoard');

function customAlert() {
  this.render = function(dialog){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    var refreshButton = document.getElementById("refresh");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH+"px";
    dialogbox.style.left = (winW/2) - (300 * .5) + "px";
    dialogbox.style.top = (winH/2) +"px";
    dialogbox.style.display = "block";
    document.getElementById("dialogboxbody").innerHTML = dialog;
    refreshButton.onclick = Alert.ok;
    // document.getElementById("dialogboxfoot").innerHTML = '<button onclick="Alert.ok()">Try Again</button>';
  }
  this.ok = function (){
    dialogoverlay.style.display = "none";
    dialogbox.style.display = "none";
    console.log(parentBoard);
    // parentBoard.removeChild(gameBoardElement);
    while (parentBoard.hasChildNodes()) {
        parentBoard.removeChild(parentBoard.firstChild);
    }
    createBoard();
  }
}

var Alert = new customAlert();


function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    Alert.render("You found a match!");
  } else {
    Alert.render("Sorry, try again.");

      // gameBoardElement.remove("img");
      // parentBoard.remove(gameBoardElement);

    // createBoard();
  }
}

var flips = 0;
function flipCard() {
  var cardId = this.getAttribute("data-id");
  flips ++;
  var flipElement = document.createElement("div");
  flipElement.innerHTML = flips;
  // parentBoard.appendChild(flipElement);
  console.log(flips);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  // this.className = "front";
  this.setAttribute("src", cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  // cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

// var userNumberOfCards = document.getElementById('number').value;
// console.log(userNumberOfCards);
const createBoard = function () {
  for (let i = 0; i < cards.length; i++) {
    //http://borgs.cybrilla.com/tils/javascript-for-loop-with-delay-in-each-iteration-using-iife/
    (function (i) {
      setTimeout(function() {
        // for (let i = 0; i < cards.length; i++) {
          var cardElement = document.createElement("img");
          cardElement.setAttribute("src", "images/back.png");
          // cardElement.className = "back";
          cardElement.setAttribute("data-id", i);
          cardElement.addEventListener("click", flipCard);
          document.getElementById('game-board').appendChild(cardElement);

      }, 100 * i);
  })(i);
};
}


createBoard();


const GameBoard = () => {
  return (

      <div id="game-board" className="board clearfix">
      <div id="dialogoverlay"></div>
      <div id="dialogbox">
        <div>
          <div id="dialogboxhead"></div>
          <div id="dialogboxbody"></div>
          <button id="refresh">Refresh</button>
          <CardList cards={this.props.cards}/>
          <div id="dialogboxfoot"></div>
        </div>
      </div>
      </div>

  );
};

export default GameBoard;
