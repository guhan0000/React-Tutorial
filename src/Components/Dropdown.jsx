import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>DropDown</h1>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="">--Select--</option>
        <option value="history">History</option>
        <option value="crime">Crime</option>
        <option value="fiction">Fiction</option>
      </select>
      <p>Selected {value}</p>
    </div>
  );
};

export default Dropdown;
