import { useReducer } from "react";
const Counter = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      case "Reset":
        return { count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter with useReducer</h1>
      <h2>Counter{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  );
};
export default Counter;
