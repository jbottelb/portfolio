/*
Holds API functions for accesing the phyAPI
*/
export async function getMessages() {
   fetch("https://phyapi.herokuapp.com/messages")
   .then(function(response) {
       return response.json()
     })
};
