// components/Layout/Layout.js

import React from "react";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
// import Instructions from "../Instructions/Instructions";
// import Cards from "../Cards/Cards";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const logStuff = () => {
  console.log("clicked!");
};

const Layout = () => {
  return (
    <div className="layout" role="organize">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
