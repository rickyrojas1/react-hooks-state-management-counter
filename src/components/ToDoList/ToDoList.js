import React, { useContext, useState } from "react";
import { Context } from "./../../Store";

const ToDoList = () => {
  const { store, dispatch } = useContext(Context);
  const [toDo, setToDo] = useState([]);
  const toDoList = store.toDoList ? store.toDoList : [];

  const dispatchToDo = () => {
    dispatch({ type: "add", toDo });
    setToDo("");
  };
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>To Do List </h1>
      <input
        type="text"
        value={toDo}
        onChange={e => setToDo(e.currentTarget.value)}
      />
      <button onClick={() => dispatchToDo()}>Add</button>
      <ul style={{ listStylePosition: "inside" }}>
        {toDoList.map((val, index) => {
          return (
            <li key={index}>
              {val}
              <button
                onClick={() => {
                  dispatch({ type: "delete", val });
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
