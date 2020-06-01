import React from 'react';
import TodoItem from '../TodoItem';

class TodoList extends React.Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map((item) => (
            <TodoItem key={item.get('id')}
                done={item.get('done')}
                onToggle={() => onToggle(item.get('id'))}
                onRemove={() => onRemove(item.get('id'))}
            >
                {item.get('text')}
            </TodoItem>
        ));

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;