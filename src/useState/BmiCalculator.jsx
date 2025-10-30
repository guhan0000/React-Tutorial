import React, { useState } from "react";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [error, setError] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");
  function handleChange(event) {
    setHeight(event.target.value);
  }
  function calculateBMI() {
    const pattern = /^\d*\.?\d+$/;
    if (height && weight && pattern.test(height) && pattern.test(weight)) {
      let heightInMs = height / 100;
      let result = (weight / (heightInMs * heightInMs)).toFixed(1);
      setBmi(result);
      if (result < 18.5) {
        setBmiStatus("UnderWeight");
      } else if (result >= 18.5 && result <= 25) {
        setBmiStatus("Normal Weight");
      } else if (result > 25 && result <= 30) {
        setBmiStatus("OverWeight");
      } else {
        setBmiStatus("Obese");
      }
      setError("");
      setHeight("");
      setWeight("");
    } else {
      setError("please enter valid weight and height");
      setBmi("");
      setBmiStatus("");
      setHeight("");
      setWeight("");
    }

    // setBmi("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Height"
        onChange={handleChange}
        value={height}
      />
      <input
        type="text"
        placeholder="Enter Weight"
        value={weight}
        onChange={(event) => {
          setWeight(event.target.value);
        }}
      />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <p>
          BMI is {bmi} and Your status is {bmiStatus}
        </p>
      )}
      {error && <p style={{color:"red"}}>{error}</p>}
      {/* {setBmi("")} */}
    </div>
  );
};

export default BmiCalculator;
