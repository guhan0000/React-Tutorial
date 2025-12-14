import React, { useReducer } from "react";

const CountManagement = () => {
  let initialValue = { count: 0, username: "Greens", password: 12345 };
  function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case "inc":
        return { ...state, count: state.count + 1 };
      case "dec":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: payload };
      case "upDateUser":
        return { ...state, username: payload };
      case "upDatePassword":
        return { ...state, password: payload };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialValue);
  //    console.log(state)
  return (
    <div>
      <h1>REACT USEREDUCER HOOK</h1>
      <h2>Counter :{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", payload: 0 });
        }}
      >
        Reset
      </button>
      <hr />
      <h1>Username :{state.username}</h1>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "upDateUser", payload: e.target.value });
        }}
      />
      <h1>Password :{state.password}</h1>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "upDatePassword", payload: e.target.value });
        }}
      />
    </div>
  );
};

export default CountManagement;
