import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, onDelete, onEdit, onCheck }) {
  return (
    <ul className="flex flex-col justify-center gap-3 mt-6">
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onEdit={onEdit}
            onCheck={onCheck}
          />
        ))
      ) : (
        <span className="text-center mt-10">
          Nothing to find here,
          <br />
          Use the above field to add your tasks.
        </span>
      )}
    </ul>
  );
}
