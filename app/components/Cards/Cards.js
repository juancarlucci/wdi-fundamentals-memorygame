// components/Cards/Cards.js

import React from "react";
import "./cards-style";

const Cards = () => {
  return (
    <div className="Cards">
     <div id="cards">
        <img src="back.png" alt="Queen of Diamonds"/>
        <img src="back.png" alt="Queen of Hearts"/>
        <img src="back.png" alt="King of Diamonds"/>
        <img src="back.png" alt="King of Hearts"/>
      </div>
    </div>
  );
};

export default Cards;
