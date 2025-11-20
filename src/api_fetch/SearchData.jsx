import React, { useEffect, useState } from "react";
import styles from "./SearchData.module.css";

const SearchData = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getProduct = async () => {
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
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {products.map((product, index) => {
        return (
          <div className={styles.container}>
            <div key={index} className={styles.productList}>
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchData;
