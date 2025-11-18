// • useEffect runs after render.
// • [] → run once on mount.
// • [state] → run when that state changes.
// • no [] → run on every render.
// • return cleanup function runs before re-running the effect and on unmount.

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("component loaded/mounted   ");
  // }, []);
  // useEffect(() => {
  //   console.log(count, "count changed");
  // }, [count]);

  // Mounting+updating runs after every render
  useEffect(() => {
    console.log("mounting and updating");
  });
  return (
    <div>
      <h1>UseEffect</h1>
      <h2>Counter:{count}</h2>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
