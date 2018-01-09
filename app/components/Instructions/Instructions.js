// components/Instructions/Instructions.js

import React from "react";
import "./instructions-style";
import Button from "../Button/Button";

const Instructions = () => {
  return (
    <div className="instructions" role="">
      <h2 id="instructions">Instructions</h2>
      <p>Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.</p>
      <Button />
      <p className="userInputMessage">Number of cards :
      <input type="number" placeholder="# of cards" step="4" min="4" max="32" id="number" />
      </p>
      <p className="score">Score:</p>
    </div>
  );
};

export default Instructions;
