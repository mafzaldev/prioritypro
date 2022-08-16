import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <ul className="list">
      {props.todoList.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={props.onDelete} />
      ))}
    </ul>
  );
}
