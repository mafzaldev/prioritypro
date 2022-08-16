import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm(props) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      props.setTodoList([...props.todoList, { id: uuidv4(), text: todo }]);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
