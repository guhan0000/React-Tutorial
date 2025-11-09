import React from "react";
// import tvs from "../assets/tvs.avif";
import styles from "./Bike.module.css";

const Bike = ({ brand, model, price, image, show }) => {
  function buyBike(bike) {
    console.log("congrats", bike, "-", model, "is purchased");
  }
  // if (show) {
  return (
    show && (
      <div className={styles.card}>
        <div>
          <img src={image} alt="" className={styles.bikeImg} />
          <h4>{brand}</h4> <span>{model}</span>
          <h5>{price}</h5>
        </div>
        <button
          className={styles.btn}
          onClick={(event) => {
            buyBike(event.target.value);
          }}
          value={brand}
        >
          Buy
        </button>
      </div>
    )
  );
  // } else {
  //   return <div className={styles.card}>Bike Not Available</div>;
  // }
};

export default Bike;
