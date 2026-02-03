// CarList.jsx
import Car from "./Car";
import swift from "../assets/swift.png";
import i20 from "../assets/i20.png";
import nexon from "../assets/nexon.png";
import city from "../assets/city.png";
import { useEffect, useState } from "react";

function CarList() {
  const [carList, setCarList] = useState([
    {
      id: 1,
      brand: "Maruti Suzuki",
      model: "Swift",
      price: "₹7,00,000",
      ex_cost: 700000,
      image: swift,
      show: true,
    },
    {
      id: 2,
      brand: "Hyundai",
      model: "i20",
      price: "₹9,50,000",
      ex_cost: 950000,
      image: i20,
      show: true,
    },
    {
      id: 3,
      brand: "Tata",
      model: "Nexon",
      price: "₹12,00,000",
      ex_cost: 1200000,
      image: nexon,
      show: true,
    },
    {
      id: 4,
      brand: "Honda",
      model: "City",
      price: "₹14,50,000",
      ex_cost: 1450000,
      image: city,
      show: true,
    },
  ]);
  // useEffect(() => {
  //   console.log("useEffect inside CarList");
  // });
  function handleDelete(carId) {
    console.log("delete triggered");

    const newCarList = carList.filter((car) => car.id !== carId);
    setCarList(newCarList);
  }

  const myCarList = carList.map((car) => (
    <Car
      brand={car.brand}
      model={car.model}
      price={car.price}
      image={car.image}
      show={car.show}
      id={car.id}
      fundelete={handleDelete}
      key={car.id}
    />
  ));

  return (
    <>
      <h4>CarList</h4>
      {myCarList}
    </>
  );
}

export default CarList;
