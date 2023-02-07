import { Container } from "@mui/material";
import { useState } from "react";
import { v4 } from "uuid";
import AddNewTodo from "../components/AddNewTodo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import { Todo } from "../types/model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAddTodo = (textValue: string) => {
    const newTodo = {id: v4(), value: textValue, completed: false}
    setTodos([newTodo, ...todos])
  }
  const handleCompleteTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if(id === todo.id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  const handleRemoveTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => id !== todo.id)
    setTodos(updatedTodos)
  }

  return (
    <Container maxWidth="sm" sx={{display: "flex", flexDirection: "column",  }}>
      <Header/>
      <AddNewTodo submitNewTodo={handleAddTodo}/>
      <TodoList todos={todos} handleCompleteTodo={handleCompleteTodo} handleRemoveTodo={handleRemoveTodo}/>
    </Container>
  );
}

export default App;