import React from 'react';
import { useEffect, useState } from "react";
import Message from "./message.js";
import { getMessagesDB } from "../../Services/db.js";

export default function Messages() {
    const [messages, setMessages] = useState([]);

  // get form to fisplay by name
  useEffect(() => {
      getMessagesDB()
      .then(res => {
          setMessages(res);
          console.log("setting");
          console.log(res);
          alert("Message Added")
      });

  }, []);

  return (
      <div class="standatd">
      {
          messages && messages.map((m) => (
            <Message class="message" name={m.name} message={m.message}/>
          )
      )
      }
      </div>
  );
};
