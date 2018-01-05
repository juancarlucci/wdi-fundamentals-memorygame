// components/Main/Main.js

import React from "react";
import Instructions from "../Instructions/Instructions";
import Cards from "../Cards/Cards";
import "./main-style";

const Main = () => {
  return (
    <div className="main">
      <Instructions />
      <Cards />
    </div>
  );
};

export default Main;
