// components/Cards/Cards.js

import React from "react";
import "./cards-style";

class Cards extends React.Component {
  renderImage(imageUrl) {
    return (

        <img src={imageUrl} />

    );
  }
  render() {
    return (
      <div className="Cards">
       <div id="cards">
          {this.renderImage(this.props.card.cardImage)}
        </div>
      </div>
    );
  };
}
export default Cards;



// class Card extends React.Component {
//   renderImage(imageUrl) {
//     return (
//
//         <img src={imageUrl} />
//
//     );
//   }
//
//   render() {
//     return (
//       <div>
//         {this.renderImage(this.props.card.cardImage)}
//       </div>
//     )
//   }
// }
//
// export default Card
