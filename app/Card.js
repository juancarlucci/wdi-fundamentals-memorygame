import React from "react";

// import ReactDOM from "react-dom";
// import "./styles";
// import Header from "./components/Header/Header";
// import Layout from "./components/Layout/Layout";
// var imageName = require('../images/image1.jpg')
// <img src={imageName} />

class Card extends React.Component {
  renderImage(imageUrl) {
    return (

        <img src={imageUrl} />

    );
  }

  render() {
    return (
      <div>
        {this.renderImage(this.props.card.cardImage)}
      </div>
    )
  }
}

export default Card
