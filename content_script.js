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

function addButtons() {
  let chats = document.querySelectorAll("._2wP_Y");

  for (let i = 0; i < chats.length; i++) {
    let chat = chats[i];

    let btn = document.createElement("button");
    btn.className = "btn-schedule";
    btn.innerHTML = "Schedule Message";
    btn.onclick = function () {
      let chatName = chat.querySelector("._3ko75").innerText;
      openScheduler(chatName);
    };

    let btnContainer = chat.querySelector(".btn-container");
    if (btnContainer) {
      btnContainer.appendChild(btn);
    } else {
      btnContainer = document.createElement("div");
      btnContainer.className = "btn-container";
      btnContainer.appendChild(btn);
      chat.appendChild(btnContainer);
    }
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
