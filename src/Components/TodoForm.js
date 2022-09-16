import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoAddCircleSharp } from "react-icons/io5";

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
        <IoAddCircleSharp size={30} />
      </button>
    </form>
  );
}
