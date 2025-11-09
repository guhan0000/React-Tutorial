import Bike from "./Bike";
import tvs from "../assets/tvs.avif";

import yamaha from "../assets/yamaha.avif";
import bajaj from "../assets/bajaj.avif";
import honda from "../assets/honda.avif";

function BikeList() {
  const bikeList = [
    {
      // brand: "TVS",
      // model: "Raider",
      // price: "₹1,15,000",
      // image: tvs,
      // show: true,
    },
    {
      brand: "Yamaha",
      model: "MT-15",
      price: "₹2,15,000",
      image: yamaha,
      show: true,
    },
    {
      brand: "Bajaj",
      model: "NS-200",
      price: "₹1,55,000",
      image: bajaj,
      show: true,
    },
    {
      brand: "Honda",
      model: "SP-125",
      price: "₹1,00,000",
      image: honda,
      show: true,
    },
  ];
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
