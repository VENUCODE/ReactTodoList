import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { BsSquare, BsCheckSquare,BsTrash3 } from "react-icons/bs";
const Todo = ({ todos, removeTodo, completeTodo,UpdateTodo }) => {
  // const [edit, setEdit] = useState({ id: null, value: "" });

  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div key={todo.id}>
        {" "}
        <span>{todo.text}</span>
      </div>
      <div className="icons">
        <span>
          {todo.isComplete? <BsCheckSquare onClick={() => completeTodo(todo.id)}/> : <BsSquare onClick={() => completeTodo(todo.id)} />}
        </span>
        <span><FaEdit onClick={()=>UpdateTodo(todo.id)}t/></span>
        <span><BsTrash3 onClick={()=>removeTodo(todo.id)} /></span>
      </div>

    </div>
  ));
};

export default Todo;
