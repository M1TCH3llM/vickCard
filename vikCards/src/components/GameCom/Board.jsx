import React from "react";
import "./board.css";
import Card from "./cards";

function Board() {
  return (
    <div id="boardCol">
      <Card />
      <div id='colName'>You are</div>
      <div id='colName'>You are not</div>
      <div id='colName'>You are torn</div>
      <div id='colName'>Does not apply</div>
    </div>
  );
}

export default Board;
