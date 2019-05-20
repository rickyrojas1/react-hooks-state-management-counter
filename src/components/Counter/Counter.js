import React, { useContext } from "react";
import { Context } from "./../../Store";

const Counter = () => {
  const { store, dispatch } = useContext(Context);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button
        style={{ width: "200px", margin: "10px" }}
        onClick={() => dispatch({ type: "increment" })}
      >
        {" "}
        Add One
      </button>
      <h1>{store.count}</h1>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{ width: "200px", margin: "10px" }}
      >
        {" "}
        Minus One
      </button>
    </div>
  );
};

export default Counter;
