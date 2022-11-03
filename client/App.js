import React, { useState } from "react";
import "./components/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Importing components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import DateTime from "./components/DateTime.js";
import Calendar1 from "./components/Calendar.js";

function App() {
  //array destructuring for current todos state and updated todos state
  //Todos will store all user's input todos
  //Todo is single task user create
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <p className="sayHi">What's up for today?</p>
        <div className="datetime">
          <img
            className="sun"
            src="https://i.pinimg.com/474x/62/bf/35/62bf35bf02b274ce0d7555ed582cb642.jpg"
          ></img>

          <DateTime></DateTime>
        </div>
      </div>

      <div className="todolist-containter">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
      {/* TESTING */}
      {/* <div class="card"> */}
      <div class="conatiner">
        <div class="card__overlay"></div>
        <div class="card__content">
          <Calendar1></Calendar1>
        </div>
      </div>
      {/* </div> */}
      {/* TESTING */}
    </div>
  );
}

export default App;
