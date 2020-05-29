import React from 'react';
import TodoItem from '../TodoItem';

class TodoList extends React.Component{
    render(){
        const { todos, onToggle } = this.props;
        const todoList = todos.map((item)=>(
            <TodoItem key={item.id} done={item.done} onToggle={()=>onToggle(item.id)}>
                {item.text}
            </TodoItem>
        ));

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;