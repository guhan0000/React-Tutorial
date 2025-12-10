import React, { useEffect, useRef, useState } from "react";

const RenderCount = () => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  useEffect(() => {
    renderRef.current += 1;
  });
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>Render Count</p>
      <p>Component Rendered{renderRef.current}</p>
      <p>Button Clicked{count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default RenderCount;
