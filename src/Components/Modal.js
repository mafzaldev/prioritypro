import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";

const ModalOverlay = ({ id, handleModal, onEdit }) => {
  const [editedTodo, setEditedTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTodo !== "") {
      onEdit(id, editedTodo);
      handleModal();
    }
  };
  const content = (
    <div onClick={(e) => e.stopPropagation()} className="modal">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Edit your task here..."
          value={editedTodo}
          onChange={(e) => {
            setEditedTodo(e.target.value);
          }}
        />
        <button type="submit">
          <svg
            style={{ width: "2rem", height: "2rem" }}
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
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.handleModal} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
