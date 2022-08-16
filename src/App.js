import "./App.css";
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const Todos = [
    { id: 1, text: "Learn HTML" },
    { id: 2, text: "Learn CSS" },
    { id: 3, text: "Learn Javascript" },
    { id: 4, text: "Learn React" },
    { id: 5, text: "Learn Nodejs" },
  ];

  const [todoList, setTodoList] = useState(Todos || []);
  const onDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <TodoForm todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} onDelete={onDelete} />
      </header>
    </div>
  );
}

export default App;
