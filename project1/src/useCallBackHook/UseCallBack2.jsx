import React, { useCallback } from "react";

const UseCallBack2 = () => {
  const memorzedFn = useCallback(() => {
    console.log("clicked");
  }, []);
  return (
    <div>
      <button onClick={memorzedFn}>Click</button>
    </div>
  );
};

export default UseCallBack2;
