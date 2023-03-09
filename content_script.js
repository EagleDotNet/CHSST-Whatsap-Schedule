function createMainButton() {
  const mainButton = document.createElement("button");
  mainButton.innerText = "Schedule Message";
  mainButton.setAttribute("style", `
    background-color: #25d366;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 9999;
    cursor: pointer;
  `);

  mainButton.onclick = function () {
    const messageBox = document.querySelector("[contenteditable='true'][data-tab='1']");
    const selectedChat = document.querySelector(".X7YrQ");
    if (messageBox && selectedChat) {
      openScheduleDialog(messageBox, selectedChat);
    }
  };

  return mainButton;
}

function createChatButton(selectedChat) {
  const chatButton = document.createElement("button");
  chatButton.innerText = "Schedule Message";
  chatButton.setAttribute("style", `
    background-color: #25d366;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    margin-top: 5px;
    cursor: pointer;
  `);

  chatButton.onclick = function () {
    const messageBox = document.querySelector("[contenteditable='true'][data-tab='1']");
    if (messageBox) {
      openScheduleDialog(messageBox, selectedChat);
    }
  };

  return chatButton;
}

function addButtonsToChats() {
  const chatList = document.querySelector("div[role='tablist']");
  if (chatList) {
    const chats = chatList.querySelectorAll("div[role='tab']");
    chats.forEach((chat) => {
      if (!chat.querySelector(".chat-schedule-button")) {
        const chatButton = createChatButton(chat);
        chatButton.classList.add("chat-schedule-button");
        chat.appendChild(chatButton);
      }
    });
  }
}

function main() {
  const mainButton = createMainButton();
  document.body.appendChild(mainButton);

  // Add buttons to existing chats
  addButtonsToChats();

  // Watch for new chats and add buttons
  const chatList = document.querySelector("div[role='tablist']");
  if (chatList) {
    const observer = new MutationObserver(() => {
      addButtonsToChats();
    });
    observer.observe(chatList, { childList: true });
  }
}

main();

// get all chats
const chats = document.querySelectorAll('div._2kHMt');

// add button for each chat
chats.forEach(chat => {
  const button = createMainButton();
  chat.appendChild(button);
});

function createMainButton() {
  const button = document.createElement('button');
  button.innerHTML = 'Schedule Message';
  button.className = '_2UaNq';

  // add click listener to button
  button.addEventListener('click', () => {
    // code to schedule message
    console.log('Scheduling message...');
  });

  return button;
}
