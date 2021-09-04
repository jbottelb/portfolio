import React, { Component } from 'react';


class Message extends Component {

    render() {
        return (
            <div class="message">
                <p class="messageName">{this.props.name}</p>
                <p class="messagemessage">{this.props.message}</p>
            </div>
        )
    }
}

export default Message;
