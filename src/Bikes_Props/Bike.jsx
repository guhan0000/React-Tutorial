import React from "react";
// import tvs from "../assets/tvs.avif";
import styles from "./Bike.module.css";

const Bike = ({ brand, model, price, image }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt="" className={styles.bikeImg} />
        <h4>{brand}</h4> <span>{model}</span>
        <h5>{price}</h5>
      </div>
      <button className={styles.btn}>Buy</button>
    </div>
  );
};

export default Bike;
