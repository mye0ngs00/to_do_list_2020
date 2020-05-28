import React from 'react';

class TodoList extends React.Component {

    state = {
        items: [],
        item: ''
    };

    handlerChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    handlerEnter = (e) => {
        if (e.key === 'Enter') {
            this.handlerInsert();
        }
    }

    handlerInsert = () => {
        this.setState(current => ({
            items: current.items.concat(current.item),
            item: ''
        }));
        this.input.focus();
    }

    handlerDelete = (idx) => {
        this.setState(current => ({
            items: current.items.filter((item, i)=>{ return i !== idx})
        }));
    }

    render() {
        const itemList = this.state.items.map((item, idx) => (
            <li key={idx} onDoubleClick={()=>{this.handlerDelete(idx)}}>{item}</li>
        ));

        return (
            <div>
                <input
                    type="text"
                    placeholder="item"
                    onChange={this.handlerChange}
                    onKeyPress={this.handlerEnter}
                    value={this.state.item}
                    ref ={(ref)=>{this.input = ref}}
                />
                <button
                    onClick={this.handlerInsert}
                >등록하기
                </button>

                <div>
                    <ul>
                        {itemList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;