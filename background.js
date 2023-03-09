chrome.runtime.onInstalled.addListener(function() {
    console.log('Extension installed.');
  });
  
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('web.whatsapp.com')) {
      console.log('WhatsApp web page loaded.');
      // Add code to interact with WhatsApp web here.
    }
  });
  