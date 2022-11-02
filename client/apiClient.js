import axios from "axios";

const API_URI =
  "mongodb+srv://todo-app:test@cluster0.5dfqbxr.mongodb.net/?retryWrites=true&w=majority";

// fetching all todos from our API by GET
async function getAllTodos() {
  const { data: todos } = await axios.get(API_URI);
  return todos;
}

//create new todo task and send POST via axios.post
async function createTodo(task) {
  const { data: newTodo } = await axios.post(API_URI, { task });
  return newTodo;
}

//send PUT request to update todo by acessing id. Payload is an object contains field that we want to update
async function updateTodo(id, payload) {
  const { data: newTodo } = await axios.put(`${API_URI}${id}`, payload);
  return newTodo;
}

//send DELETE request to the API
async function deleteTodo() {
  const message = await axios.delete(`${API_URI}${id}`);
  return message;
}

export default { getAllTodos, createTodo, updateTodo, deleteTodo };
