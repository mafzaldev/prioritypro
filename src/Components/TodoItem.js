import React, { useState } from "react";
import Modal from "./Modal";

export default function TodoItem({ todo, onDelete, onEdit, onCheck }) {
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(todo.completed);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const handleCheck = (e) => {
    setCheck((prev) => !prev);
    onCheck(todo.id);
  };

  return (
    <>
      <Modal
        id={todo.id}
        handleModal={handleModal}
        onEdit={onEdit}
        show={modal}
      />

      <li className="item">
        <input
          type="checkbox"
          title="Mark as completed"
          checked={check}
          onChange={handleCheck}
        />
        <span
          style={todo.completed ? { textDecoration: "line-through 2px" } : {}}
        >
          {todo.text}
        </span>
        <button
          type="button"
          title="Edit task"
          className="action edit"
          onClick={() => handleModal()}
        >
          <svg
            style={{ width: "1.5rem", height: "1.5rem" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>{" "}
        </button>

        <button
          type="button"
          title="Delete task"
          className="action delete"
          onClick={() => onDelete(todo.id)}
        >
          <svg
            style={{ width: "1.5rem", height: "1.5rem" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>{" "}
        </button>
      </li>
    </>
  );
}
