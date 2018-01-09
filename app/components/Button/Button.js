// components/Button/Button.js

import React from "react";

function handleClick(){
 console.log("refreshed");
}


const Button = props => {
  return <button onClick={() => props.handleClick()}>Refresh Game</button>;
};

// const Button = props => {
//   return <button onClick={this._refreshGame}>Refresh Game</button>;
// };
export default Button;
