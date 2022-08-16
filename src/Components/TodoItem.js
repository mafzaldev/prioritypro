import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <li className="item">
      <span>{todo.text}</span>
      <button className="delete" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}
