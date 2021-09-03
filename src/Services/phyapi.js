/*
Holds API functions for accesing the phyAPI
*/
export async function getMessages() {
   fetch("https://phyapi.herokuapp.com/messages")
    .then((response) => response.json())
    .then((json) => {
        return json;
    })
};
