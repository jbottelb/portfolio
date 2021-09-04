import React from 'react';
import { useEffect, useState } from "react";
import Message from "./message.js";
import axios from "axios";

export default function Messages() {
    const [messages, setMessages] = useState([]);

  // get form to fisplay by name
  useEffect(() => {
      if (messages && messages.length )
      {

      }
      else {
          axios.get("https://phyapi.herokuapp.com/messages")
          .then(res => {
              setMessages(res.data);
              console.log(res.data);
          });

        }
  }, [messages]);

  return (
      <div class="standatd">
      {
          messages && messages.map((m) => (
            <Message name={m.name} message={m.message}/>
          )
      )
      }
      </div>
  );
};
