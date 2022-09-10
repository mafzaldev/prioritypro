import "./App.css";
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { useEffect } from "react";

function App() {
  const Todos = [
    { id: 1, text: "Learn HTML", completed: false },
    { id: 2, text: "Learn CSS", completed: false },
    { id: 3, text: "Learn Javascript", completed: false },
    { id: 4, text: "Learn React", completed: false },
  ];

  const [todoList, setTodoList] = useState(Todos || []);
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

  return (
    <div className="App">
      <h1>YourTodos</h1>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
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
