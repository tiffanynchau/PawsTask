const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://todo-app:test@cluster0.5dfqbxr.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "todos",
  })
  .then(() => console.log("Connected to Mongo Db."))
  .catch((err) => console.log(err));

//set Schema for todo-app

//creating Schema for todo
const todoSchema = new mongoose.Schema({
  //creating task
  user: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    unique: true,
    required: true,
  },
  //creating completed status
  completed: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
