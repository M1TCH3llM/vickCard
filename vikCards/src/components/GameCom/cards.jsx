import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Draggable from "react-draggable";

function Cards() {
  const [flip, setFlip] = useState(false);

  return (
    <Draggable>
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <div
          className="card" // Add any necessary styling here
          onClick={() => setFlip(!flip)}
          draggable="true"
          id="cardA"
        >
          Side A
        </div>
        <div
          className="card" // Add any necessary styling here
          onClick={() => setFlip(!flip)}
          draggable="true"
          id="cardB"
        >
          Side B
        </div>
      </ReactCardFlip>
    </Draggable>
  );
}

export default Cards;
