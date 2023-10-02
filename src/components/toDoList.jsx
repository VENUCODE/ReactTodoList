import React, { useState } from 'react';
import Form from './toDoForm'; // Corrected import

const ToDolist = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodos=(todo)=> {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  
  console.log(todos);

  return (
    <div>
      <Form onSubmit={addTodos} />
    </div>
  );
}

export default ToDolist;
