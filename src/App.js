// import logo from './logo.svg';
import "./App.css";
import React from "react";
import BikeList from "./Bikes_Props/BikeList";
import Bike from "./Bikes_Props/Bike";
import tvs from "./assets/tvs.avif";
import honda from "./assets/honda.avif";
import yamaha from "./assets/yamaha.avif";
import bajaj from "./assets/bajaj.avif";

function App() {
  return (
    <>
      <h1>Dynamic Loading</h1>
      <BikeList />
    </>
  );
}

export default App;
