import {useState} from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {todo: "Pyykit", id: 0},
    {todo: "Käy lenkillä", id: 1}
  ]);
  const [newTodo, setNewTodo] = useState("")

  const addTodo = e => {
    e.preventDefault();
    const todoObject = {
      todo: newTodo,
      id: todos.length
    };
    if(!todoObject.todo) {
      return;
    }
    setTodos(todos.concat(todoObject));
    setNewTodo("");
  };

  const clearTodo = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  const handleTodoChange = e => {
    console.log(e.target.value);
    setNewTodo(e.target.value);
  }

  return (
    <>
        <Header /> 
        <AddTodo addTodo={addTodo} newTodo={newTodo} handleTodoChange={handleTodoChange}/>
        <Todos todos={todos} clearTodo={clearTodo}/>
    </>
  );
}

export default App;
