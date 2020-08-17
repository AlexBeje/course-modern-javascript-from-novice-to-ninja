// adding new chat documents
// setting up a real time listener to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
    this.unsub;
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
  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        //* Get the document changes
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // update the UI
            //* doc(get the doc reference)
            //* data(get the doc data)
            callback(change.doc.data());
          }
        });
      });
  }
  updateUsername(username) {
    this.username = username;
    localStorage.setItem('username', username);
  }
  updateRoom(room) {
    this.room = room;
    console.log("Room updated.");
    if (this.unsub) {
      this.unsub();
    }
  }
}
