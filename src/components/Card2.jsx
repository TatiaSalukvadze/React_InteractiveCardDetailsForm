import React, { useContext } from "react";
import { SharedContext } from "../App";

function Card2() {
  const { cvcf } = useContext(SharedContext);
  return (
    <div id="c2">
      <p>{cvcf}</p>
    </div>
  );
}

export default Card2;
