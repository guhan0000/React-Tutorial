import React from "react";

const Child3 = (props) => {
  //   const { products } = props;
  return (
    <>
      <h1>Child3</h1>
      <h2>{}</h2>
      <ul>
        {props.myprods.map((item) => {
          return <li key={item.id}>{item.id + item.name + item.price}</li>;
        })}
      </ul>
    </>
  );
};

export default Child3;
