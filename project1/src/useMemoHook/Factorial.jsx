import React, { useMemo, useState } from "react";

const Factorial = () => {
  const [result, setResult] = useState(0);
  const [num, setNum] = useState(0);
  function findFactorial(num) {
    let fact = 1;
    if (num === 0) {
      console.log(fact);

      setResult(fact);
      return result;
    }
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    console.log(fact);

    setResult(fact);
    return result;
  }
  //   useMemo
  const getFactorialValue = useMemo(() => {
    return findFactorial(num);
  }, [result]);
  return (
    <div>
      <h3>UseMemo</h3>
      <input
        type="text"
        placeholder="Enter Input"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          findFactorial(Number(num));
        }}
      >
        Calculate
      </button>
      <h6>Result {result}</h6>
    </div>
  );
};

export default Factorial;
