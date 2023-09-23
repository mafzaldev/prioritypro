import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Modal from "./components/Modal";

import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [modal, setModal] = useState(false);
  const [todoList, setTodoList] = useLocalStorage("todos", []);

  const onAdd = (value) => {
    setTodoList([{ id: uuidv4(), text: value, completed: false }, ...todoList]);
  };

  const onDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onEdit = (id, text) => {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
    console.log(id, text);
  };

  const onCheck = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <Modal
        open={modal}
        handleModal={handleModal}
        action="Add"
        onSubmit={onAdd}
      />
      <h1 className="text-3xl font-bold leading-7 text-white sm:text-5xl sm:tracking-tight">
        Priority Pro
      </h1>
      <div
        className="border border-dashed border-gray-500 flex items-center justify-center p-3 w-96 cursor-pointer mt-8 sm:mt-16"
        onClick={() => handleModal()}
      >
        <PlusIcon class="h-5 w-5 text-gray-300" />
        <p className="text-gray-300 ml-1">Add</p>
      </div>
      <TodoList
        todoList={todoList}
        onDelete={onDelete}
        onEdit={onEdit}
        onCheck={onCheck}
      />
    </div>
  );
}

export default App;
