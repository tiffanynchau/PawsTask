const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const appRouter = require("./routes/appRouter.js");

/**
 * handle requests for static files
 */
app.use("/build", express.static(path.join(__dirname, "../build")));

//app.use("./router", appRouter);

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

// app.get("/api", (res, req) => {
//   return res.status(200).send("hello from the other side");
// });

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
