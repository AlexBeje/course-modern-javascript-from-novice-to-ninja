// dom queries
const chatList = document.querySelector(".chat-list");

// class instances
const chatUi = new ChatUi(chatList);
const chatroom = new Chatroom("general", "shoun");

// get the chats and reder
chatroom.getChats((data) => chatUi.render(data));
