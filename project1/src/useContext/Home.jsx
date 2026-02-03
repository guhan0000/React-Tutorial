import react, { createContext } from "react";
import Dashboard from "./Dashboard";
import Deactivation from "./Deactivation";
export const userNameContext = createContext();

function Home() {
  const name = "kaviguhan";
  return (
    <div>
      <h3>Home</h3>
      <p>Welcome {name}</p>
      <userNameContext.Provider value={name}>
        <Dashboard/>
        <Deactivation />
      </userNameContext.Provider>
    </div>
  );
}
export default Home;
