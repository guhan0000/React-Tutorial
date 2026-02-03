import React, { useContext } from "react";
import Deactivation from "./Deactivation";
import { userNameContext } from "./Home";

const Dashboard = () => {
  const data = useContext(userNameContext);
  return (
    <div>
      <h2>User Dashboard</h2>
      <h4>Name: {data}</h4>
     
    </div>
  );
};

export default Dashboard;
