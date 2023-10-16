import React, { Fragment, useState } from "react";

const EditTodo = ({ todoItem }) => {
  const [description, setDescription] = useState(todoItem.description);
  const onChangeEdit = (event) => {
    setDescription(event.target.value);
  };
  // edit description function
  const onClickEditButton = async (event) => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:3000/todo/${todoItem.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };
  //close button function
  const onClickClose = () => {
    setDescription(todoItem.description);
  };
  return (
    <Fragment>
      {/* <!-- Button to Open the Modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todoItem.todo_id}`}
      >
        Edit
      </button>

      {/* <!-- The Modal --> */}
      <div className="modal" id={`id${todoItem.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={onClickClose}
              >
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={onChangeEdit}
              />
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={onClickEditButton}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={onClickClose}

              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
