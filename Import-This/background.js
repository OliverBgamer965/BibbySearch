chrome.runtime.onInstalled.addListener(function() {
    // Set a default background color
    chrome.storage.sync.set({ backgroundColor: 'white' });
  });
  