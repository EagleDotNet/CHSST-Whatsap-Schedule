// Listen for the page to finish loading
window.addEventListener('load', function () {
  console.log('WhatsApp web page has finished loading.');

  // Check if the current page is a conversation
  const isConversation = document.querySelector('[data-tab="3"]') !== null;

  if (isConversation) {
    console.log('User is currently in a conversation.');

    // Check if there are any scheduled messages for this conversation
    chrome.storage.sync.get('scheduledMessages', function (result) {
      const scheduledMessages = result.scheduledMessages || [];

      // Find any scheduled messages that should be sent now
      const now = new Date().getTime();
      const messagesToSend = scheduledMessages.filter(message => message.conversationId === window.location.hash && message.sendTime <= now);

      // Fill in the message input field and click the send button for each scheduled message that should be sent now
      messagesToSend.forEach(message => {
        const messageInput = document.querySelector('[data-tab="6"] [contenteditable="true"]');
        const sendButton = document.querySelector('[data-tab="6"] span[data-icon="send"]');

        messageInput.innerText = message.text;
        sendButton.click();
      });

      // Remove any scheduled messages that have been sent
      const updatedScheduledMessages = scheduledMessages.filter(message => !messagesToSend.includes(message));
      chrome.storage.sync.set({ scheduledMessages: updatedScheduledMessages });
    });

    // Add your code to interact with the conversation here.
  } else {
    console.log('User is not currently in a conversation.');
  }
});

// Listen for changes to the URL hash, indicating that the user has navigated to a different conversation
window.addEventListener('hashchange', function () {
  console.log('User has navigated to a different conversation.');

  // Check if the current page is a conversation
  const isConversation = document.querySelector('[data-tab="3"]') !== null;

  if (isConversation) {
    console.log('User is now in a conversation.');

    // Check if there are any scheduled messages for this conversation
    chrome.storage.sync.get('scheduledMessages', function (result) {
      const scheduledMessages = result.scheduledMessages || [];

      // Find any scheduled messages that should be sent now
      const now = new Date().getTime();
      const messagesToSend = scheduledMessages.filter(message => message.conversationId === window.location.hash && message.sendTime <= now);

      // Fill in the message input field and click the send button for each scheduled message that should be sent now
      messagesToSend.forEach(message => {
        const messageInput = document.querySelector('[data-tab="6"] [contenteditable="true"]');
        const sendButton = document.querySelector('[data-tab="6"] span[data-icon="send"]');

        messageInput.innerText = message.text;
        sendButton.click();
      });

      // Remove any scheduled messages that have been sent
      const updatedScheduledMessages = scheduledMessages.filter(message => !messagesToSend.includes(message));
      chrome.storage.sync.set({ scheduledMessages: updatedScheduledMessages });
    });

    // Add your code to interact with the conversation here.
  } else {
    console.log('User is not currently in a conversation.');
  }
});
// ...continued from previous response

// Add a new button to each conversation
const conversations = document.querySelectorAll('[data-tab="3"] div[data-tab="3"]');
conversations.forEach(conversation => {
  const button = document.createElement('button');
  button.innerText = 'Schedule Message';
  button.classList.add('schedule-message-button');

  // Store the conversation ID in a data attribute on the button
  const conversationId = conversation.getAttribute('data-reactid');
  button.setAttribute('data-conversation-id', conversationId);

  // Add a click listener to the button
  button.addEventListener('click', function () {
    const message = prompt('Enter a message to schedule:');
    const sendTime = prompt('Enter the time to send the message (in YYYY-MM-DD HH:MM format):');

    if (message && sendTime) {
      const scheduledMessage = {
        conversationId: conversationId,
        text: message,
        sendTime: new Date(sendTime).getTime()
      };

      // Store the scheduled message in the extension's storage
      chrome.storage.sync.get('scheduledMessages', function (result) {
        const scheduledMessages = result.scheduledMessages || [];
        scheduledMessages.push(scheduledMessage);
        chrome.storage.sync.set({ scheduledMessages: scheduledMessages });
      });
    }
  });

  conversation.querySelector('div[data-tab="3"] span').appendChild(button);
});

