import React, { Fragment, useState } from "react";
const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const onClickSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onClickSubmit}>
        <input
          type="text"
          value={description}
          className="form-control"
          onChange={onChangeDescription}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};
export default InputTodo;
