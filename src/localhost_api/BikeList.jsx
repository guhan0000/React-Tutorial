import Bike from "./Bike";

import { useEffect, useState } from "react";

function BikeList() {
  const [bikes, setBikes] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/bkes")
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
  }, []);
  if (!bikes) {
    return (
      <>
        <p>{error}</p>
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
