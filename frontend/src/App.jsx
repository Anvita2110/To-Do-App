import { useState } from "react";
import Input from "./Input.jsx";
import Todo from "./Todo.jsx";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="flex h-screen flex-col gap-8 justify-center items-center">
      <h1 className="text-3xl font-bold text-center">To-Do-App</h1>
      <Input updateTodo={setTodoList} />
      {todoList?.map((item) => (
        <Todo title={item.title} isDone={item.isDone} />
      ))}
    </div>
  );
}

export default App;
