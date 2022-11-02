const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

/**
 * handle requests for static files
 */
// app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

/*
app.get("/todos", async (req, res, next) => {
  try {
    const todos = await todoModel.find({}).exec();
    return res.status(200).json(todos);
  } catch (err) {
    next({ status: 400, message: "Failed to get todos" });
  }
});

app.post("/todos", async (req, res, next) => {
  try {
    const todo = await todoModel.create(req.body);
    return res.status(200).json(todo);
  } catch (err) {
    next({ status: 400, message: "Failed to create todo" });
  }
});

app.put("/todos/:id", async (req, res, next) => {
  try {
    const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(todo);
  } catch (err) {
    next({ status: 400, message: "Failed to update todo" });
  }
});

app.delete("/todos/:id", async (req, res, next) => {
  try {
    await todoModel.FindByIdAndRemove(rew.params.id);
    return res.status(200).send("Deleted!");
  } catch (err) {
    next({ status: 400, message: "failed to delete todo" });
  }
});
*/

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middle error",
    status: 400,
    message: { err: "An error occured" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
