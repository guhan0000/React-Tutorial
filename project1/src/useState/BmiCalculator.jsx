import React, { useState } from "react";
import styles from "./BMI.module.css";
const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [error, setError] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");
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
        setStatusColor("under-weight");
      } else if (result >= 18.5 && result <= 25) {
        setBmiStatus("Normal Weight");
        setStatusColor("normal");
      } else if (result > 25 && result <= 30) {
        setBmiStatus("OverWeight");
        setStatusColor("over-weight");
      } else {
        setBmiStatus("Obese");
        setStatusColor("obese");
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
        <>
          <p>BMI is {bmi}.</p>
          <p>
            Your status is{" "}
            <span className={styles[statusColor]}>{bmiStatus}</span>
          </p>
        </>
      )}
      {error && <p>{error}</p>}
      {/* {setBmi("")} */}
    </div>
  );
};

export default BmiCalculator;
