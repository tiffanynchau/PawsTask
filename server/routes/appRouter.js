const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController.js");

router.get("/", appController.getAllTodos, (req, res) => {
  res.status(200).json("hello");
});

router.post("/", appController.createTodo, (req, res) => {
  res.status(200).json("hi");
});

/*
router.put(
  "/:id",
  appController.getOneTodo,
  appController.updateTodo,
  (req, res) => {
    return res.status(200).json("hi");
  }
);

router.delete(
  ":/id",
  appController.getOneTodo,
  appController.deleteTodo,
  (req, res) => {
    return res.status(200).json("helloiii");
  }
);
*/

module.exports = router;
