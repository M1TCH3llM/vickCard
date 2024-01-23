// import React, { useState } from "react";
// import ReactCardFlip from "react-card-flip";
// import Draggable from "react-draggable";

// function cards() {
//   const [flip, setFlip] = useState(false);
//   return (
//     <Draggable>
//       <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
//         <div id="cards" onClick={() => setFlip(!flip)}>
//           Side A
//         </div>
//         <div id="cards" onClick={() => setFlip(!flip)}>
//           Side B
//         </div>
//       </ReactCardFlip>
//     </Draggable>
//   );
// }

// export default cards;

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Draggable from "react-draggable";
import { useRef } from "react";

function Cards() {
  const [flip, setFlip] = useState(false);
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <div
          ref={nodeRef}
          className="card"
          id="cards"
          onClick={() => setFlip(!flip)}
          draggable="true"
        >
          Side A
        </div>
        <div
          ref={nodeRef}
          className="card"
          id="cards"
          onClick={() => setFlip(!flip)}
          draggable="true"
        >
          Side B
        </div>
      </ReactCardFlip>
    </Draggable>
  );
}

export default Cards;
