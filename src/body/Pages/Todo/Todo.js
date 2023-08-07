import React, { useState, useRef } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './scss/styles.scss';
import './scss/todocolors.scss';
import { todoColors } from './todoColors.js';
import TodoItems from "./TodoItems";

const Todo = () => {
  const todoRef = useRef(null);
  const colorRef = useRef(null);
  const [todoState, setTodo] = useState([
    { name: 'coffee break', color: 'white' },
  ]);

  const [color, setColor] = useState('green');

  const options = todoColors.map((item) => {
    return { value: item, className: item, label: item };
  });

  const onSelect = (e) => {
    console.log(e);
    setColor(e.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const todoValue = todoRef.current.value;
    let colorValue = colorRef.current.props.value;
    setTodo((prev) => {
      return [{ name: todoValue, color: colorValue }, ...prev];
    });
    console.log(todoState);
  };
  const removeTodo = (e) => {
    let removeIndex = e;
    let newTodo = todoState.filter((item, index) => {
      return index != removeIndex ? true : false;
    });
    setTodo(newTodo);
  };
  return (
    <>
      <div className="todoPage">
        <h1 className="heading">TODO PAGE</h1>
        <form onSubmit={submitHandler} className="todoForm">
          <input type="text" ref={todoRef} required />
          <Dropdown
            ref={colorRef}
            className={`react-dropdown ${color}`}
            onChange={(e) => onSelect(e)}
            options={options}
            value={color}
            placeholder="Select an option"
          />
          <button type="submit">submit</button>
        </form>
        <TodoItems removeTodo={removeTodo} todoItems = {todoState} />
      </div>
    </>
  );
};

export default Todo;
