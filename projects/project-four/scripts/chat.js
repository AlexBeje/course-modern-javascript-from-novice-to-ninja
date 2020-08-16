// adding new chat documents
// setting up a real time listener to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
  }
  async addChat(message) {
    //format a chat object
    //* when the user has created the chat
    const now = new Date();
    const chat = {
      //* shortaned from "message: message;" because it has theh same name
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    // save the chat document to the database
    const response = await this.chats.add(chat);
    return response;
  }
}

const chatroom = new Chatroom("gaming", "shoun");

chatroom
  .addChat("hello everyone")
  .then(() => console.log("chat added"))
  .catch(err => console.log("err", err));
