import React, { useRef, useState } from "react";

const UseRefDom = () => {
  // const [count, setCount] = useState(0);
  let count = "Zero";
  let h1Ref = useRef();
  return (
    <div>
      <code>useRef</code>
      <h1 ref={h1Ref}></h1>
      <button
        onClick={() => {
          h1Ref.current.innerHTML = `<em>${count}</em>`;
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseRefDom;
