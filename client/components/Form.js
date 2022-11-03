import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  //write functions to invoke state
  const inputTextHandler = (e) => {
    console.log("e");
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Form;
