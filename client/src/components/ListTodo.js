import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
const ListTodo = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    getTodoData();
  }, []);
  const getTodoData = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo");
      const jsonData = await response.json();
      setTodoData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  //delete function
  const onClickDeletesTodo = async (todoId) => {
    try {
      const response = await fetch(`http://localhost:3000/todo/${todoId}`, {
        method: "DELETE",
      });
      setTodoData(todoData.filter((item) => item.todo_id !== todoId));
    } catch (error) {
      console.error(error.message);
    }
    console.log(todoId);
  };
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoData.map((item) => (
            <tr key={item.todo_id}>
              <td>{item.description}</td>
              <td>
                <EditTodo todoItem={item} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onClickDeletesTodo(item.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
