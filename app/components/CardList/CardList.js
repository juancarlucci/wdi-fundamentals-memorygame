import React from "react";
import Cards from "../Cards/Cards";
// import ReactDOM from "react-dom";
// import "./styles";
// import Header from "./components/Header/Header";
// import Layout from "./components/Layout/Layout";


class CardList extends React.Component {
  render() {
    return (
      <div>

        {this.props.cards.map((card) => {
          return <Cards card={card} key={card.cardImage} />
        })}
      </div>
    )
  }
}

export default CardList;
