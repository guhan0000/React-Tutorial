import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
      <input type="tel" name="" id="" />
      <button onClick={handleClick}>bt2</button>
    </>
  );
};

export default InputFocus;
