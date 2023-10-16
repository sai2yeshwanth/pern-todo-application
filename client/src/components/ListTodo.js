import React, { Fragment, useEffect, useState } from "react";
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
            <tr>
              <td>{item.description}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
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
