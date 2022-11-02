import React, { useState, useEffect } from "react";
import apiClient from "./apiClient.js";

function App() {
  //array destructuring for current todos state and updated todos state
  //Todos will store all user's input todos
  //Todo is single task user create
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const getAllTodos = async () => {
      const todos = await apiClient.getAllTodos();
      setTodos(todos);
    };
    getAllTodos();
  }, []);

  return (
    <div className="App">
      <div>
        <input
          id="todo-input"
          type="text"
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
        />
        <button type="button" onClick={createTodo}>
          {" "}
          Add Task{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
