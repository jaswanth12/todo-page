import React, { useState, useRef } from 'react';
const TodoItems = (props) => {
  let removeTodo = props.removeTodo;
  let todoItems = props.todoItems;
  return ( 
    <>
      <div className="todoItems">
        {todoItems.map((item, index) => {
          return (
            <p key={index} className={`item ${item.color}`}>
              <span className={`text`}>
                {item.name} {}
              </span>{' '}
              <span className="cross" onClick={() => removeTodo(index)}>
                X
              </span>
            </p>
          );
        })}
      </div>
    </>
  );
};
export default TodoItems;
