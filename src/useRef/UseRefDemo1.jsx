import React, { useRef, useState } from "react";

const UseRefDemo1 = () => {
  const [count, SetCount] = useState(0);
  const countRef = useRef(0);
  return (
    <>
      <h1>useRef</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          SetCount(count + 1);
          console.log(count);
        }}
      >
        Click me
      </button>
      <h2>{count}</h2>
      <p>Update{}</p>
      <button
        onClick={() => {
          SetCount(countRef.current++);
        }}
      >
        update
      </button>
    </>
  );
};

export default UseRefDemo1;
