import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import TodoList from './router/TodoList';

function App() {
  return (
    <HashRouter>
      <Route path='/' exact={true} component={TodoList} />
    </HashRouter>
  );
}

export default App;
