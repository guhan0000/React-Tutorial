import React, { useState } from "react";

const useInput = () => {
  const[userName, setUserName] = useState("");
  const bind = {
    value: userName,
    onChange: (e) => {
      setUserName(e.target.value);
    },
  };
  const reset = () => {
    setUserName("");
  };
  return [bind, reset, userName];
};

export default useInput;
