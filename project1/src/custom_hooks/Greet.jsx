import React from "react";
import useInput from "./useInput";

const Greet = () => {
  const [bind, reset, userName] = useInput();
  return (
    <div>
      <h2>Custom Hooks</h2>
      <input type="text" placeholder="enter Name" {...bind} />
      <button
        onClick={() => {
          alert(`Hello, ${userName}`);
          reset();
        }}
      >
        Greet
      </button>
    </div>
  );
};

export default Greet;
