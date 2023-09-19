import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [todoList, setTodoList] = useLocalStorage("todos", []);

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
      <h1>PriorityPro</h1>
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
