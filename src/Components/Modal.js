import React, { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

const Modal = ({ id, handleModal, onEdit }) => {
  const [editedTodo, setEditedTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTodo !== "") {
      onEdit(id, editedTodo);
    }
    handleModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
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
            <IoAddCircleSharp size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
