import React, { useContext } from "react";
import { userNameContext } from "./Home";
const Deactivation = () => {
  const name = useContext(userNameContext);
  return (
    <div>
      <h3>Deactivate Account</h3>
      <h5>GoodBye {name}</h5>
    </div>
  );
};

export default Deactivation;
