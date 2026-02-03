import React, { useRef, useState } from "react";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        name=""
        id=""
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className="btn btn-secondary"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default Password;
