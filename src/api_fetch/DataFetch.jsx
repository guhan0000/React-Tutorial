import { useState, React } from "react";

const DataFetch = () => {
  const [carts, setCarts] = useState([]);

  function fetchData() {
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((data) => setCarts(data.carts));
  }

  return (
    <div>
      <h1>ApiDataFetching</h1>
      <button onClick={fetchData}>GetData</button>
      <button
        onClick={() => {
          setCarts([]);
        }}
      >
        Reset
      </button>
      {carts.map((cart, index) => {
        return (
          <div key={index}>
            <h1>{cart.id}</h1>
            {cart.products.map((product, index) => {
              return (
                <div key={index}>
                  <h2>{product.title}</h2>
                  <p>
                    <em>{product.price}</em>
                  </p>
                  <img src={product.thumbnail} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DataFetch;
