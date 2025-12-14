import React from "react";
import { useState } from "react";
const UseCallBack1 = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseCallBack1;
