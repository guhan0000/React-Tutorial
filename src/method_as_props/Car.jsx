// Car.jsx
import React from "react";
import styles from "./Car.module.css";

const Car = ({ brand, model, price, image, show, id, fundelete }) => {
  function buyCar(car) {
    console.log("congrats", car, "-", model, "is purchased");
  }

  return (
    show && (
      <div className={styles.card}>
        <div>
          <img src={image} alt="" className={styles.carImg} />
          <h4>{brand}</h4> <span>{model}</span>
          <h5>{price}</h5>
        </div>
        <button
          className={styles.btn}
          onClick={(event) => {
            buyCar(event.target.value);
          }}
          value={brand}
        >
          Buy
        </button>
        <button className={styles.btn} onClick={()=>{fundelete(id)}}>
          Delete
        </button>
      </div>
    )
  );
};

export default Car;
