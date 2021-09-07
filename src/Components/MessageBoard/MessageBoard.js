import React from "react";
// import { sendMessage } from "../../Services/phyapi.js";
import { sendMessageDB } from "../../Services/db.js";
import Messages from "./messages.js";
import "../../css/message.css"

// should make this load from a file and create sub-components for simplicity
class MessageBoard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        message: ""
      };
    }

    mySubmitHandler = (event) => {
    // first we need to format for the db
    event.preventDefault();
    console.log(this.state);
    sendMessageDB(this.state.name, this.state.message);

    alert("Message added!");

  };
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val });
    };

  render() {
      return (
          <div class="standard">
              <h1>Message Board</h1>

              <input class="name" name="name" type="text" onChange={this.myChangeHandler}/>
              <input class="messageInput" name="message" type="text" onChange={this.myChangeHandler}/>
              <button class="messageButton" onClick={this.mySubmitHandler}>
                  Post
              </button>
              <Messages />
          </div>
      )
  }
}

export default MessageBoard;
