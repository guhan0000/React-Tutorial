import React, { useRef, useState } from "react";

const StateVsRef = () => {
  const [count, setCount] = useState(0);
  let countRef = useRef(0);
  return (
    <div>
      <h1>Count{count}</h1>
      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        Increment
      </button>
      <button onClick={() => setCount(countRef.current)}>Update</button>
    </div>
  );
};

export default StateVsRef;
