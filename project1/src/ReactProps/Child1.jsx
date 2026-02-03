import React from "react";
import Child2 from "./Child2";


const Child1 = (props) => {
  return (
    <>
      <h1>Child1</h1>
      <h2>Username-{props.username}</h2>
      <h2>Password-{props.password}</h2>
      <hr />
      <Child2 un={props.username} pw={props.password}></Child2>
    </>
  );
};

export default Child1;
