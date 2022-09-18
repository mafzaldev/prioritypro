import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

const Modal = ({ id, handleModal, onEdit }) => {
  const [editedTodo, setEditedTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTodo !== "") {
      onEdit(id, editedTodo);
      handleModal();
    }
  };

  return (
    <div onClick={handleModal} className="modal-backdrop">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Edit your todo"
            value={editedTodo}
            onChange={(e) => {
              setEditedTodo(e.target.value);
            }}
          />
          <button type="submit">
            <FiEdit size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
