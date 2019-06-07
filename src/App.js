import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import SecondPage from "./components/SecondPage/SecondPage";
import { Context, initialState, reducer } from "./Store";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      <Router>
        <div className="App">
          <nav>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <li style={{ padding: "10px" }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ padding: "10px" }}>
                <Link to="/secondPage/">second Page</Link>
              </li>
              <li style={{ padding: "10px" }}>
                <Link to="/ToDoList/">To Do List</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/secondPage/" component={SecondPage} />
        <Route path="/ToDoList/" component={ToDoList} />
      </Router>
    </Context.Provider>
  );
}

export default App;
