/*
Holds API functions for accesing the phyAPI
*/

import axios from "axios";

/*
export async function getMessages() {
    let data = [];
   axios.get("https://phyapi.herokuapp.com/messages")
   .then( res => {
       console.log(res.data)
       data = res.data;
   }
   )
   return data;
};
*/

export async function sendMessage(name, message) {
    axios.post("https://phyapi.herokuapp.com/sendmessage",
        {"name": name, "message": message}
    )
};
