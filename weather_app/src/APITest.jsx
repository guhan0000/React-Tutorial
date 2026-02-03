import React, { useState } from "react";
import styles from "./ApiTest.module.css";

const APITest = () => {
  const [product, setProduct] = useState([]);
  const url = "https://dummyjson.com/products";
  async function getData() {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log(data.products);
        setProduct(data.products);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Enter text" />
      <button onClick={getData}>GetData</button>
      <div className={styles.container}>
        {/* <p>{product.id}</p> */}
        {product.map((product) => (
          <>
            <span>
              <img
                src={product.thumbnail}
                alt="product_img"
                width="200px"
                height="300px"
              />

              <p key={product.id}>{product.title}</p>
            </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default APITest;
