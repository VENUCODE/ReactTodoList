import React, { useState } from "react";
import Form from "./toDoForm"; // Corrected import
import Todo from "./Todo";
const ToDolist = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updatedTodo = (todoId, value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }
    setTodos(prev=>prev.map(item=>(item.id===todoId) ? value:item))
  };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(
      (todo) => todo.id !== id && !todo.isComplete
    );
    setTodos(updatedTodos);
  };
  const completeTodo = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todos;
    });
  };

  return (
    <>
      <div>
        <Form onSubmit={addTodos} />
        <Todo
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          updatedTodo={updatedTodo}
        />
      </div>
    </>
  );
};
export default ToDolist;
