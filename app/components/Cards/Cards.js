// components/Cards/Cards.js

import React from "react";
import "./cards-style";

const Cards = () => {
  return (
    <div className="Cards">
     <div id="cards">
      <img src="images/queen-of-diamonds.png" alt="Queen of Diamonds"/>
      <img src="images/back.png" alt="Queen of Hearts"/>
      <img src="images/king-of-diamonds.png" alt="King of Diamonds"/>
      <img src="images/back.png" alt="King of Hearts"/>
      </div>
    </div>
  );
};

export default Cards;
