import React, { useState } from "react";

const Form = (props) => { 
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete:false
    });
    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} placeholder="Add to Todo" name='text' className="todo-app" />
      <button type="submit" className="todo-button">+ Add</button>
    </form>
  );
}

export default Form;
