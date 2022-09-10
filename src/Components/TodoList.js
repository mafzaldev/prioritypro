import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, onDelete, onEdit, onCheck }) {
  return (
    <ul className="list">
      {todoList.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onCheck={onCheck}
        />
      ))}
    </ul>
  );
}
