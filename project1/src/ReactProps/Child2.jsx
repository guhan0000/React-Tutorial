import React from "react";
import Child3 from "./Child3";
let products = [
  { id: 1, name: "mobile", price: 20000 },
  { id: 2, name: "laptop", price: 40000 },
];
const Child2 = (props) => {
  // console.log(un);
  const { un, pw } = props;

  return (
    <>
      <h1>Child2</h1>
      <h2>Username-{un}</h2>
      <h2>Password-{pw}</h2>
      <hr />
      <Child3 myprods={products}></Child3>
    </>
  );
};

export default Child2;
