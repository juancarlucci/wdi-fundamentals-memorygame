
var cards = [
  {
    rank: "Queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "Queen",
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
    // createBoard();
  }
}

var Alert = new customAlert();

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    // Alert.render("You found a match!");
    alert("You found a match!");
  } else {
    // Alert.render("Sorry, try again.");
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
    cardElement.setAttribute("alt", cards[i].rank +" of "+ cards[i].suit);
    document.getElementById('game-board').appendChild(cardElement);

  }
}
createBoard();
