// app/index.js

import React from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
// import "./styles";
import CardList from "./CardList";
// import Layout from "./components/Layout/Layout";
import "./styles";
// import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

// let cards = [
//   {
//     rank: "queen",
//     suit: "hearts",
//     cardImage: "images/queen-of-hearts.png"
//   },
//   {
//     rank: "queen",
//     suit: "diamonds",
//     cardImage: "images/queen-of-diamonds.png"
//   },
//   {
//     rank: "King",
//     suit: "hearts",
//     cardImage: "images/king-of-hearts.png"
//   },
//   {
//     rank: "King",
//     suit: "diamonds",
//     cardImage: "images/king-of-diamonds.png"
//   }
// ];

// class App extends React.Component {
//   render() {
//     console.log(this.props.cards);
//     return (
//       <div>
//         <h1>Card  List </h1>
//         <CardList cards={this.props.cards}/>
//       </div>
//     )
//   }
// }
render(<Layout />, document.querySelector(".root"));
// render(<App cards={cards}/>, document.querySelector(".root"));
