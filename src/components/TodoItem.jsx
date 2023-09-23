import React, { useState } from "react";
import Modal from "./Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function TodoItem({ todo, onDelete, onEdit, onCheck }) {
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(todo.completed);

  const handleCheck = (e) => {
    setCheck((prev) => !prev);
    onCheck(todo.id);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Modal
        open={modal}
        handleModal={handleModal}
        todoValue={todo}
        action="Edit"
        onSubmit={onEdit}
      />

      <li className="bg-[#111111] flex items-center justify-between p-4 w-96">
        <div className="flex items-center">
          <div className="w-6">
            <input
              type="checkbox"
              checked={check}
              onChange={handleCheck}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 inline-block"
            />
          </div>
          <div className="ml-3 text-sm leading-6 inline-block">
            <p
              className={`text-gray-300 text-left ${
                check ? "line-through" : "no-underline"
              }`}
            >
              {todo.text}
            </p>
          </div>
        </div>

        <div className="ml-3 flex items-center gap-2">
          {!check && (
            <PencilIcon
              className="h-5 w-5 text-gray-400 hover:text-gray-200 cursor-pointer"
              onClick={() => handleModal()}
            />
          )}
          <TrashIcon
            className="h-5 w-5 text-gray-400 hover:text-gray-200 cursor-pointer"
            onClick={() => onDelete(todo.id)}
          />
        </div>
      </li>
    </>
  );
}
