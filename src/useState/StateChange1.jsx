import React, { useState } from "react";

const StateChange1 = () => {
  const [state, setState] = useState(0);
  const [color, setColor] = useState();
  function changeColor(event) {
    setColor((prev) => {
      prev = event.target.value;
      return prev;
    });
  }
  return (
    <>
      <h2 style={{ color: "blue" }}>Counter</h2>
      <h3>{state}</h3>
      <button
        onClick={() => {
          if (state >= 0 && state < 10) {
            setState((prev) => prev + 1);
          }
        }}
      >
        Increment
      </button>
      {/* <button onClick={()=>{setState(state-1)}}>Decrement</button> */}
      <button
        onClick={() => {
          if (state > 0) {
            setState((prev) => prev - 1);
          }
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setState(0);
        }}
      >
        Reset
      </button>
      <input
        type="text"
        placeholder="enter your favourite color"
        onChange={changeColor}
      />
      <h3 style={{ backgroundColor: color }}>My Favourite Color is{color}</h3>
    </>
  );
};

export default StateChange1;
