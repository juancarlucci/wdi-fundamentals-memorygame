// components/Layout/Layout.js

import React from "react";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Instructions from "../Instructions/Instructions";
import GameBoard from "../GameBoard/GameBoard";
import Button from "../Button/Button";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./layout-style";


const Layout = () => {
  return (
    <div className="layout" role="organize">
      <Header />
      <Nav />
      <Instructions className="main"/>
      <GameBoard className="main" />
      <Footer />
    </div>
  );
};

export default Layout;
