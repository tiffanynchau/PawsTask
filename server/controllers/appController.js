const Todo = require("../../models/todoModel.js");

const baseError = {
  message: "An error occured",
  status: 400,
};

const appController = {};

/**
 * getAllTodos - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */

appController.getAllTodos = (req, res, next) => {
  Todo.find({}, (err, data) => {
    if (err)
      return next("Error in appController.getAllTodos: " + JSON.stringify(err));
    res.locals.data = data;
    return next();
  });
};

/**
 * createTodo - create and save a new User into the database.
 */

appController.createTodo = async (req, res, err) => {
  const todoTask = new Todo({
    task: req.body.task,
  });
  try {
    await Todo.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
};

module.exports = appController;
