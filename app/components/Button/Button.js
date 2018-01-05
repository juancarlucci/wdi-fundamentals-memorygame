// components/Button/Button.js

import React from "react";

const Button = props => {
  return <button onClick={() => props.handleClick()}>Click Me</button>;
};

export default Button;
