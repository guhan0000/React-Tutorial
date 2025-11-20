import Bike from "./Bike";
import loading from "../assets/loading.gif";

import { useEffect, useState } from "react";

function BikeList() {
  const [bikes, setBikes] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/bikes")
        .then((response) => {
          if (!response.ok) {
            throw Error("Can't Retrieve Data");
          }
          return response.json();
        })
        .then((data) => setBikes(data))
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }, 2000);
  }, []);
  if (!bikes) {
    return (
      <>
        {error && <p>{error}</p>}
        {!error && <img src={loading} width={"50px"} style={{margin:" 25% auto",display:"block"}}/>}
      </>
    );
  }
  const myBikeList = bikes.map((bike) => (
    <Bike
      brand={bike.brand}
      model={bike.model}
      price={bike.price}
      image={bike.image}
      show={bike.show}
      key={bike.model}
    />
  ));
  return (
    <>
      <h4>BikeList</h4>
      {myBikeList}
    </>
  );
}

export default BikeList;
