import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
 
function cards() {
  const [flip, setFlip] = useState(false);
  return (
      <ReactCardFlip isFlipped={flip}
          flipDirection="vertical">
          <div id='cards' onClick={() => setFlip(!flip)}>
              Side A
          </div>
          <div id='cards' onClick={() => setFlip(!flip)}>
              Side B
          </div>
      </ReactCardFlip>
  );
}

export default cards;
