const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

//get all todo

//update todo

//delete todo

app.listen(3000,()=>{
    console.log("server has started on port 3000")
})