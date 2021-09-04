import Parse from "parse";

export async function getMessagesDB() {
    const message = Parse.Object.extend('message');
    const query = new Parse.Query(message);

    const results = await query.find();
    let res = [];

    // gotta stip out the data we need
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const message = object.get("message");
      const name = object.get("name");

      console.log(name);
      console.log(message);
      res.push({"name" : name, "message": message});

    }
    console.log(res)
    return res;
}

export async function sendMessageDB(name, message) {
    const myNewObject = new Parse.Object('message');
    myNewObject.set('message', message);
    myNewObject.set('name', name);
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('message created', result);
    } catch (error) {
      console.error('Error while creating message: ', error);
    }
}
