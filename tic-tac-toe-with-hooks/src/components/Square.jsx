import React from "react";

const style = {
  //this is a JS object, not css
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeigh: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = (
  { value, onClick } //destructuring out props
) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
