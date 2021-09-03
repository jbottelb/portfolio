import React from "react";
import { getMessages } from "../../Services/phyapi.js";

// should make this load from a file and create sub-components for similcity
class MessageBoard extends React.Component {
    sendMessage() {
        fetch("https://phyapi.herokuapp.com/sendmessage", {
          "method": "POST",
          "headers": {
            "x-rapidapi-host": "fairestdb.p.rapidapi.com",
            "x-rapidapi-key": "apikey",
            "content-type": "application/json",
            "accept": "application/json"
          },
          "body": JSON.stringify({
            name: "Portfolio",
            message: "Hello from the application"
          })
        })
        .then(response => response.json())
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err);
        });
        alert("Message Sent!")
    }
    async getMessages() {
        let messages = await getMessages();
        console.log(messages);
        alert("Fetched messages")
    }
    render() {
        return (
            <div class="standard">
                <h1>Message Board</h1>
                <button onClick={this.sendMessage}>
                    Send
                </button>
                <button onClick={this.getMessages}>
                    Send
                </button>
            </div>
        )
    }
}

export default MessageBoard;
