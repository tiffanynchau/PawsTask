const Todo = require("../models/todoModel");

const todoController = {};

/**
 * getAllTodos - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */

todoController.getAllTodos = (req, res, next) => {
  Todo.find({}, (err, data) => {
    if (err)
      return next(
        "Error in todoController.getAllTodos: " + JSON.stringify(err)
      );
    res.locals.data = data;
    return next();
  });
};

/**
 * createTodo - create and save a new User into the database.
 */




todoController.createTodo = (req, res, err) => {};
