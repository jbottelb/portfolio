import React from "react";
// import { sendMessage } from "../../Services/phyapi.js";
import Messages from "./messages.js";

// should make this load from a file and create sub-components for simplicity
class MessageBoard extends React.Component {
    handleMessage() {

        alert("Message Sent!")
    }

    render() {
        return (
            <div class="standard">
                <h1>Message Board</h1>
                <p>
                    This page is in development
                </p>
                <button onClick={this.handleMessage}>
                    Send
                </button>
                <Messages />
            </div>
        )
    }
}

export default MessageBoard;
