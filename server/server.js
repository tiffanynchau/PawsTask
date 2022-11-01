const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
/**
 * handle requests for static files
 */
app.use("/build", express.static(path.join(__dirname, "../build")));
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
