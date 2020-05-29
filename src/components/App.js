import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component{
  state = {
    input: '',
    todos: [
      {id: 0, text: '리액트 공부', done: true},
      {id: 1, text: '컴포넌트 스타일링', done: false}
    ]
  }
  id = 1
  getId = () =>{
    return ++this.id;
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({
      input: value
    });
  }

  handleInsert = ()=>{
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: [...todos, {id:this.getId(), text:input, done:false}],
    });
  }

  render() {
    const { input, todos } = this.state;
    const{
      handleChange,
      handleInsert,
    } = this;

    return (
      <div>
        <PageTemplate>
          <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
          <TodoList todos={todos}/>
        </PageTemplate>
      </div>
    )
  }
}

export default App;
