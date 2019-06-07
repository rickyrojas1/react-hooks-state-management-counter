import React from "react";

export const initialState = { count: 0, toDoList: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "add":
      return { ...state, toDoList: [...state.toDoList, action.toDo] };
    case "delete":
      let arr = [];
      state.toDoList.map(val => (action.val === val ? "" : arr.push(val)));
      return { ...state, toDoList: [...arr] };
    default:
      return state;
  }
};

export const Context = React.createContext();
