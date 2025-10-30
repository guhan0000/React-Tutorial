import React, { useState } from "react";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState();
  function handleChange(event) {
    setHeight((prev) => (prev = event.target.value));
    console.log(height);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Height"
        onChange={handleChange}
        value={weight}
      />
      <input type="text" placeholder="Enter Weight" />
      <button>Calculate</button>
    </div>
  );
};

export default BmiCalculator;
