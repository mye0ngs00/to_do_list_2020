import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input: '',
    todos: []
  }
  id = 1
  getId = () => {
    return ++this.id;
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo=>todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    }

    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index+1, todos.length)
      ]
    });
  }
  handleRemove = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo=>todo.id === id);

    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index+1, todos.length)
      ]
    });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  handleInsert = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: [...todos, { id: this.getId(), text: input, done: false }],
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <div>
        <PageTemplate>
          <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
          <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </PageTemplate>
      </div>
    )
  }
}

export default App;
