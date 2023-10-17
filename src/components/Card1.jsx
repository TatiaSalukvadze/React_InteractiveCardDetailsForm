import React, { useContext } from "react";
import { SharedContext } from "../App";

function Card1() {
  const { namef, cnumf, expmf, expyf } = useContext(SharedContext);
  return (
    <div id="c1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="84"
        height="47"
        viewBox="0 0 84 47"
        fill="none"
      >
        <ellipse cx="23.4783" cy="23.5" rx="23.4783" ry="23.5" fill="white" />
        <path
          d="M83.5 23.5C83.5 29.0647 78.9932 33.575 73.4348 33.575C67.8764 33.575 63.3696 29.0647 63.3696 23.5C63.3696 17.9353 67.8764 13.425 73.4348 13.425C78.9932 13.425 83.5 17.9353 83.5 23.5Z"
          stroke="white"
        />
      </svg>
      <div id="outer">
        <div>
          <p id="num">{cnumf}</p>
          <div id="flex1">
            <span>{namef}</span>
            <span>
              {expmf} / {expyf}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
