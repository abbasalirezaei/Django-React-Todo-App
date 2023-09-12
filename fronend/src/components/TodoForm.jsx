import React, { useState,useEffect } from "react";
import { v4 as uuid } from "uuid";
// uuidv4();

export const TodoForm = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");
  const unique_id = uuid();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      setTodos([
        ...todos,{task:value}
      ]);
    }
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};