const express = require("express");
const {json} = require("express");
const todos = require("./controllers/todoController");
// const models = require("./models/Todo");
const todo = require("./routes/todoRoute");
const connect = require('./config/database');

connect();

const app = express();

app.use(json());

app.use("/todo", todo);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>{
  res.send("Musab is Testing");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
