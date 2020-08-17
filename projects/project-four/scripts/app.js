// dom queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMsg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");

// add a new chat
newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // update name via chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateUsername(newName);
  // reset the form
  newNameForm.reset();
  // show then hide the update message
  updateMsg.innerHTML = `Your name was updated to ${newName}.`;
  setTimeout(() => {
    updateMsg.innerHTML = "";
  }, 3000);
});

// check local storage for a name
const username = localStorage.username ? localStorage.username : "anon";

// update the chat room
rooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    chatUi.clear();
  }
  chatroom.updateRoom(e.target.getAttribute("id"));
  chatroom.getChats((chat) => chatUi.render(chat));
});

// class instances
const chatUi = new ChatUi(chatList);
const chatroom = new Chatroom("general", username);

// get the chats and reder
chatroom.getChats((data) => chatUi.render(data));
