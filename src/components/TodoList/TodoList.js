import React from 'react';
import TodoItem from '../TodoItem';

class TodoList extends React.Component{
    render(){
        const { todos } = this.props;
        const todoList = todos.map((item)=>(
            <TodoItem key={item.id} done={item.done}>
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