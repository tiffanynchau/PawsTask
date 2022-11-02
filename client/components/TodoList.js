import React from "react";
import Todo from "./Todo.js";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list fade">
        <li className="show">
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
