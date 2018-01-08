// components/Main/Main.js

import React from "react";
import Instructions from "../Instructions/Instructions";
import Cards from "../Cards/Cards";
import GameBoard from "../GameBoard/GameBoard";
import "./main-style";

const Main = () => {
  return (
    <div className="main">
      <Instructions />
      <GameBoard />
    </div>
  );
};

export default Main;
