const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo
app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING * ",
      [description]
    );
    return res.send(newTodo.rows);
  } catch (err) {
    console.log(err);
  }
});

//get all todo
app.get("/todo", async (req, res) => {
  try {
    const allTodo = await pool.query("SELECT *FROM todo");
    return res.send(allTodo.rows);
  } catch (err) {
    console.log(err);
  }
});

//get a todo
app.get("/todo/:id", async (req, res) => {
  try {
    const todo_id = req.params.id;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      todo_id,
    ]);
    return res.send(todo.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

//update todo
app.put("/todo/:id", async (req, res) => {
  try {
    const todo_id = req.params.id;
    const description = req.body.description;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, todo_id]
    );
    return res.send("Todo was updated");
  } catch (err) {
    console.log(err);
  }
});
//delete todo
app.delete("/todo/:id", async (req, res) => {
  try {
    const todo_id = req.params.id;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      todo_id,
    ]);
    return res.send("Todo was deleted");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("server has started on port 3000");
});
