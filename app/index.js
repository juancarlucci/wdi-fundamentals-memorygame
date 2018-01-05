// app/index.js

import React from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
import "./styles";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

// const App = () => {
//   return <div>Hello World</div>;
// };
// const app = document.getElementById('root');
// ReactDOM.render(<Layout/>, app);

render(<Layout />, document.querySelector(".root"));
