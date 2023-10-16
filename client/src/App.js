import "./App.css";
import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
