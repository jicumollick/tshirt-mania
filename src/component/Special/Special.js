import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ornament }) => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h4>Special</h4>
      <p>Gift: {ring}</p>
    </div>
  );
};

export default Special;
