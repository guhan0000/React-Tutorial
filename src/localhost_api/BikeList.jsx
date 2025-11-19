import Bike from "./Bike";
import tvs from "../assets/tvs.avif";

import yamaha from "../assets/yamaha.avif";
import bajaj from "../assets/bajaj.avif";
import honda from "../assets/honda.avif";

function BikeList() {
  //sorts in ascending order
  const sortedBikesAsc = [...bikeList].sort(
    (bike1, bike2) => bike1.ex_cost - bike2.ex_cost
  );
  // sorts in descending order
  const sortedBikesDesc = bikeList
    .slice()
    .sort((bike1, bike2) => bike2.ex_cost - bike1.ex_cost);
  // filters bikes which are lesser than 2Lakhs
  const bikeFilter = bikeList
    .filter((bike) => bike.ex_cost < 200000)
    .sort((bike1, bike2) => bike2.ex_cost - bike1.ex_cost);
  const myBikeList = bikeList.map((bike) => (
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
