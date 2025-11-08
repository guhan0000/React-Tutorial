import React from "react";
import Child4 from "./Child4";

const Child3 = (props) => {
  //   const { products } = props;
  // const name = "guhan";
  // const age = 23;
  return (
    <>
      <h1>Child3</h1>
      {/* <h2>{}</h2> */}
      {/* <ul>
        {props.myprods.map((item) => {
          return <li key={item.id}>{item.id + item.name + item.price}</li>;
        })}
      </ul> */}
      <Child4 name={"guhan"} age={23} />
    </>
  );
};

export default Child3;
