import React, { useEffect, useState } from "react";
import styles from "./SearchData.module.css";

const SearchData = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      // if (input === "") {
      //   return;
      // }
      let response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      let data = await response.json();
      console.log(data);
      setProducts(data.products);
    };

    getProduct();
  }, [search]);

  //
  return (
    <div>
      <h2>SearchData</h2>
      <input
        type="text"
        placeholder="Search Product"
        value={input}
        onChange={(event) => {
          // setSearch(event.target.value);
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setSearch(input);
        }}
      >
        search
      </button>
      <button
        onClick={() => {
          setInput("");
          setSearch("");
        }}
      >
        clear
      </button>
      <div className={styles.container}>
        {products.map((product, index) => {
          return (
            <div key={index} className={styles.productList}>
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
              <button>BuyNow</button>
              <button>AddtoCart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchData;
