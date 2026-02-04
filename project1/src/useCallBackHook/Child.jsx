import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("child rendered");

  return <button onClick={onClick}>Click</button>;
});

export default Child;
