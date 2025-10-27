import React from "react";
import Child1 from "./Child1";

const Parent = () => {
  let username = "abc123";
  let pwd = "abc!123";
  return (
    <>
      <h1>Parent Component</h1>

      <h2>UserName:{username}</h2>
      <h2>Password:{pwd}</h2>
      <hr />
      <Child1 username={username} password={pwd}></Child1>
    </>
  );
};

export default Parent;
