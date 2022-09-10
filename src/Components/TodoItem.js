import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Modal from "./Modal";

export default function TodoItem({ todo, onDelete, onEdit, onCheck }) {
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(true);

  const handleModal = () => {
    setModal((prev) => !prev);
  };
  const handleCheck = (e) => {
    setCheck((prev) => !prev);
    onCheck(todo.id);
  };
  return (
    <>
      {modal && (
        <Modal id={todo.id} handleModal={handleModal} onEdit={onEdit} />
      )}
      <li className="item">
        <input type="checkbox" value={check} onChange={handleCheck} />

        <span
          style={todo.completed ? { textDecoration: "line-through 2px" } : {}}
        >
          {todo.text}
        </span>
        <button
          type="button"
          className="action delete"
          onClick={() => handleModal()}
        >
          <FiEdit size={20} />
        </button>

        <button
          type="button"
          className="action edit"
          onClick={() => onDelete(todo.id)}
        >
          <AiFillDelete size={20} />
        </button>
      </li>
    </>
  );
}
