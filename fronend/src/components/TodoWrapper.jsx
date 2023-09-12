import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import axios, * as others from 'axios';
import { useEffect, useState } from 'react';


uuidv4();
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // const [catFact,setCatFact]=useState("")

  // const fetchData=()=>{
  //     axios.get("http://127.0.0.1:8000/task-list/").then(
  //         (res)=>{
  //             // setCatFact(res.data.fact)
  //             console.log("hi")
  //         }).catch(console.log("bye"))
  // }
  // useEffect(()=>{
  //   fetchFact()
  // },[])
  // const fetchFact=()=>{
  //     axios.get("http://127.0.0.1:8000/task-list/").then(
  //         (res)=>{
  //             // setCatFact(res.data.fact)
  //             console.log(res)
  //         })
  // }


  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = () => {
    return fetch("http://127.0.0.1:8000/task-list/")
      .then((res) => res.json())
      .then((d) => setTodos(d))
  }
  
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Todo List!</h1>
      <TodoForm todos={todos} setTodos={setTodos} />

      {todos.map((todo, index) => {
        return todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            todo={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
};