import React, { useState } from "react";

const CartCounter = () => {
  const [appleCount, setAppleCount] = useState(10);
  const [cart, setCart] = useState(0);
  return (
    <div className="container mt-5">
      <div className="d-flex ">
        <i className="fa-solid fa-cart-shopping fa-2x ms-auto mb-2"></i>
        <sup className="fs-4">{cart}</sup>
      </div>
      <div className="row">
        <div className="col-md mb-4">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title mb-2">Apple </h5>
              <h6 className="card-subtitle mb-2">Available:{appleCount}</h6>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (appleCount > 0) {
                    setCart((prev) => prev + 1);
                    setAppleCount((prev) => prev - 1);
                  }
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="col-md mb-4">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Samsung</h5>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
        <div className="col-md mb-4">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Redmi</h5>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCounter;
