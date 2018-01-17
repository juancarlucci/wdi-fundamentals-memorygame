import React, { Component } from 'react';


//Array of memory images
// const cards = ['cat', 'cat', 'dog', 'dog', 'horse', 'horse',
//  'pig', 'pig', 'snake', 'snake', 'fish', 'fish'];


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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let tempCheckArr = [];

// function customAlert() {
//   this.render = function(dialog){
//     var winW = window.innerWidth;
//     var winH = window.innerHeight;
//     var dialogoverlay = document.getElementById("dialogoverlay");
//     var dialogbox = document.getElementById("dialogbox");
//     var refreshButton = document.getElementById("refresh");
//     dialogoverlay.style.display = "block";
//     dialogoverlay.style.height = winH+"px";
//     dialogbox.style.left = (winW/2) - (300 * .5) + "px";
//     dialogbox.style.top = (winH/2) +"px";
//     dialogbox.style.display = "block";
//     document.getElementById("dialogboxbody").innerHTML = dialog;
//     refreshButton.onclick = Alert.ok;
//     // document.getElementById("dialogboxfoot").innerHTML = '<button onclick="Alert.ok()">Try Again</button>';
//   }
//   this.ok = function (){
//     dialogoverlay.style.display = "none";
//     dialogbox.style.display = "none";
//     console.log(parentBoard);
//     // parentBoard.removeChild(gameBoardElement);
//     while (parentBoard.hasChildNodes()) {
//         parentBoard.removeChild(parentBoard.firstChild);
//     }
//     // createBoard();
//   }
// }
//
// var Alert = new customAlert();

class MemoryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImg: ['hidden', 'hidden', 'hidden', 'hidden'],
      divClick: true,
      cardsInPlay: [],
      counter: 0
    }
    this.checkMatch = this.checkMatch.bind(this);
  }

  //Shuffle memory game images
  componentWillMount() {
    shuffleArray(cards);
  }

  //Check for match function
  checkMatch(key, e) {

    //For later hidding images purposes
    tempCheckArr.push(key.toString());

    //Add image src to state (cardsInPlay), for later compare
    // const imgSrc = e.target.firstChild.src;
    const imgSrc = e.target.src;
    console.log(imgSrc);
    const cardsInPlay = this.state.cardsInPlay;

    cardsInPlay.push(imgSrc);

    //Counter for block user click memory after unhidding two pieces
    this.setState({
      cardsInPlay: cardsInPlay,
      counter: this.state.counter + 1
    });

    //Set current clicked item as 'visible' in main array 'showImg'
    const arr = this.state.showImg
    arr[key] = 'visible';
    this.setState({
      showImg: arr
    });

    //Check if 2 items are clicked - if yes - disable clicking
    if (this.state.counter % 2) {
      this.setState({
        divClick: false
      });

      //Check if pictures are matching
      if (this.state.cardsInPlay[0] === this.state.cardsInPlay[1]) {
        tempCheckArr = [];
        this.setState({
          cardsInPlay: [],
          divClick: true
        });
        // Alert.render("You found a match!");
      } else {
        //If pictures not match take them back to hidden
        var tempArr = this.state.showImg
        // eslint-disable-next-line
        var firstElement = parseInt(tempCheckArr[0]);
        // eslint-disable-next-line
        var secondElement = parseInt(tempCheckArr[1]);
        setTimeout(()=>{
          tempArr[firstElement] = 'hidden';
          tempArr[secondElement] = 'hidden';
          tempCheckArr = [];
          this.setState({
            showImg: tempArr,
            cardsInPlay: [],
            divClick: true
          })
           // Alert.render("Sorry, try again.");
        }, 1500)
      }
    }

  }

  render() {
    return(
      <div>
        <h1>Memory Game</h1>
        <div className="mui-panel wrapper">
          {cards.map((card, text, i) => {
            return (
              <div key={card.cardImage +i} className="modal mui-panel"
                onClick={this.state.divClick ? (e) => this.checkMatch(i, e) : undefined}>
                  <img style={{visibility: this.state.showImg[i]}} src={card.cardImage}
                   key={card.cardImage} alt={card.rank + card.suit}></img>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}


export default MemoryGame;
