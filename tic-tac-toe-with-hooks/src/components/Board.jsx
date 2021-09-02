import React from "react";
import Square from "./Square";

const style = {
  border: "5px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {/*to apply the style*/}
    {squares.map((
      square,
      i //this is an implicit return
    ) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
