chrome.contextMenus.create({
    title: "Schedule message",
    contexts: ["selection"],
    onclick: function(info, tab) {
      // Implement your logic for scheduling the message here
      console.log(info.selectionText);
    }
  });
  