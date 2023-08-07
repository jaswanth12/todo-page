import React, { Component } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Todo from './body/Pages/Todo';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Todo />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
