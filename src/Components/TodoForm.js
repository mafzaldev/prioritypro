import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodoList([
        { id: uuidv4(), text: todo, completed: false },
        ...todoList,
      ]);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Type your task here..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button type="submit" title="Add task">
        <svg
          className="svg-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </form>
  );
}
