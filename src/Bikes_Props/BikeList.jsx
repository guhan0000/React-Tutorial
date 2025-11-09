import Bike from "./Bike";
import tvs from "../assets/tvs.avif";

import yamaha from "../assets/yamaha.avif";
import bajaj from "../assets/bajaj.avif";
import honda from "../assets/honda.avif";

function BikeList() {
  const bikeList = [
    {
      brand: "TVS",
      model: "Raider",
      price: "₹1,15,000",
      ex_cost: 115000,
      image: tvs,
      show: true,
    },
    {
      brand: "Yamaha",
      model: "MT-15",
      price: "₹2,15,000",
      ex_cost: 215000,
      image: yamaha,
      show: true,
    },
    {
      brand: "Bajaj",
      model: "NS-200",
      price: "₹1,55,000",
      ex_cost: 155000,
      image: bajaj,
      show: true,
    },
    {
      brand: "Honda",
      model: "SP-125",
      price: "₹1,00,000",
      ex_cost: 100000,
      image: honda,
      show: true,
    },
  ];
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
