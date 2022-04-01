import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("Ring");
const Grandpa = () => {
  let [house, setHouse] = useState(1);
  const ornament = "Diamond Ring";
  const handleBuyHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value="alur Ring">
      <div className="grandpa">
        <h4>GrandPa</h4>
        <button onClick={handleBuyHouse}>Buy A House</button>
        <p>House : {house}</p>
        <div style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
