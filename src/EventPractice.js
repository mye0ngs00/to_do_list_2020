import React from 'react';

class EventPractice extends React.Component {
    state = {
        username: null,
        message: null,
    };

    handler_onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handler_onClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: "",
        });
    }

    handler_onKeyPress = (e) => {
        if(e.key === "Enter"){
            this.handler_onClick();
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={this.handler_onChange}
                    value={this.state.username}
                />test

                <input
                    type="text"
                    placeholder="message"
                    name="message"
                    onChange={this.handler_onChange}
                    onKeyPress={this.handler_onKeyPress}
                    value={this.state.message}
                />

                <button onClick={this.handler_onClick}>확인</button>
            </div>
        );
    }

}


export default EventPractice;