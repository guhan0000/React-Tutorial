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
      <Bike brand={"TVS"} model={"Raider"} price={"$300"} image={tvs} />
      <Bike brand={"Yamaha"} model={"MT-15"} price={"$500"} image={yamaha} />
      <Bike brand={"Honda"} model={"SP-125"} price={"$350"} image={honda} />
      <Bike brand={"Bajaj"} model={"NS-200"} price={"$450"} image={bajaj} />
    </>
  );
}

export default App;
