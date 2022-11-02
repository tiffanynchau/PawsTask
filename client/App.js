import React, { useState } from "react";
import "./components/App.css";
//Importing components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  //array destructuring for current todos state and updated todos state
  //Todos will store all user's input todos
  //Todo is single task user create
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <h3>
          <strong>Hi...</strong>
        </h3>
        <p>What's up for today?</p>
      </div>

      <hr></hr>
      <div className="todolist-containter">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}

export default App;
